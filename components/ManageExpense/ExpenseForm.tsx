import React, {useState} from 'react';
import {StyleSheet, View, Text} from "react-native";
import Input from "./Input";
import Button from "../UI/Button/Button";
import {getFormattedDate} from "../../util/date";
import {GlobalStyles} from "../../constants/styles";
type InputTypes = {
    amount: string,
    date: string,
    description: string,
}

interface IProps {
    onCancel: ()=>void
    onSubmit: (payload: ExpensePayload)=>void
    submitButtonLabel: string
    initialState: InputTypes
}
export type ExpensePayload = {
    amount: number
    date: string
    description: string
}
const ExpenseForm = ({onSubmit, onCancel, submitButtonLabel, initialState}: IProps) => {
    const [inputValues, setInputValues] = useState<InputTypes>(initialState)
    let [error, setError] = useState<string | null>(null);
    type InputValues = 'amount' | 'date' | 'description'
    function inputChangeHandler(inputIdentifier: InputValues,enteredValue: string){
        setError(null)
        setInputValues(prevState => ({
            ...prevState,
            [inputIdentifier]: enteredValue,
        }))
    }

    function submitHandler() {
        const expenseData: ExpensePayload = {
            amount: +inputValues.amount,
            date: getFormattedDate(inputValues.date),
            description: inputValues.description.trim(),
        }
        const amountIsValid = isNaN(expenseData.amount)&&expenseData.amount > 0;
        const dateIsValid = expenseData.date.length < 10;
        const description = expenseData.description.trim().length > 0;
        if(amountIsValid && dateIsValid && description){
            onSubmit(expenseData)
        }else{
           setError('Invalid value')
        }
    }


    return (<View style={styles.container}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.fr1}>
                <Input
                    label={'Amount'}
                    keyboardType={"decimal-pad"}
                    onChangeText={inputChangeHandler.bind(this, 'amount')}
                    value={inputValues.amount}
                    style={styles.rowInput}
                />
                <Input
                    label={'Date'}
                    onChangeText={inputChangeHandler.bind(this, 'date')}
                    value={inputValues.date}
                    keyboardType={"default"}
                    placeholder={'YYYY-MM-DD'}
                    style={styles.rowInput}
                />
            </View>

            <Input
                label={'Description'}
                multiline={true}
                onChangeText={inputChangeHandler.bind(this, 'description')}
                value={inputValues.description}
            />
            {error && <Text style={styles.error}>{error}</Text>}
            <View style={styles.buttonsContainer}>
                <Button style={styles.button}  mode='flat' onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} disabled={Boolean(error)} onPress={submitHandler}>{submitButtonLabel}</Button>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        marginBottom: 8,
    },
    fr1: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    rowInput: {
        flex:1
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    error: {
        color: GlobalStyles.colors.error500,
        textAlign: 'center',
    }

})
export default ExpenseForm;
