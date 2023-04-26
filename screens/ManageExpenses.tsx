import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../App";
import IconButton from "../components/UI/IconButton/IconButton";
import {GlobalStyles} from "../constants/styles";
import {useDispatch, useSelector} from "react-redux";
import {addExpense, Expense, removeExpense, updateExpense} from "../store/extensesReducer";
import ExpenseForm, {ExpensePayload} from "../components/ManageExpense/ExpenseForm";
import {AppRootState} from "../store/store";

const ManageExpenses = ({route, navigation}: NativeStackScreenProps<RootStackParamList, 'ManageExpenses'>) => {
    const editedExpenseId = route.params?.id;
    const isEditing = !!editedExpenseId;
    const dispatch = useDispatch()

    const expenses = useSelector<AppRootState, Expense[]>(t=>t.expenses.expenses)
    const expense = expenses.find((t=>t.id === editedExpenseId))
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit expense' : 'Add Expense',
        })
    }, [isEditing, navigation])

    function deleteExpense() {
        if (isEditing) {
            dispatch(removeExpense({id: editedExpenseId}))
        }
        navigation.goBack()

    }

    function cancel() {
        navigation.goBack()
    }

    function confirm(payload: ExpensePayload) {
        if (isEditing) {
            dispatch(updateExpense({
                expenseID: editedExpenseId,
                expensePayload: {description: payload.description, amount: payload.amount, date: payload.date}
            }))
        } else {
            dispatch(addExpense({description: payload.description, amount: payload.amount, date: payload.date}))

        }
        navigation.goBack()
    }
        let initialState = {
            amount: expense?expense.amount.toString():'',
            date: expense?expense.date:'',
            description: expense?expense.description:'',

        }
    return (
        <View style={styles.container}>
            <ExpenseForm onSubmit={confirm} onCancel={cancel} submitButtonLabel={isEditing ? 'Update' : 'Add'} initialState={initialState}/>

            {
                isEditing &&
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon={'trash'}
                        size={36}
                        color={GlobalStyles.colors.error500}
                        onPress={deleteExpense}
                    />
                </View>
            }

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer: {
        marginTop: 15,
        paddingTop: 8,
        borderTopWidth: 2,
        borderColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },

})
export default ManageExpenses;
