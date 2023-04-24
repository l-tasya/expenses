import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../App";
import IconButton from "../components/UI/IconButton/IconButton";
import {GlobalStyles} from "../constants/styles";
import Button from "../components/UI/Button/Button";
import {useDispatch} from "react-redux";
import {addExpense, removeExpense, updateExpense} from "../store/extensesReducer";

const ManageExpenses = ({route, navigation}: NativeStackScreenProps<RootStackParamList, 'ManageExpenses'>) => {
    const editedExpenseId = route.params?.id;
    const isEditing = !!editedExpenseId;
    const dispatch = useDispatch()
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

    function confirm() {
        if (isEditing) {
            dispatch(updateExpense({expenseID: editedExpenseId, expensePayload: {description: 'LALALA', amount: 9999}}))
            navigation.goBack()
        } else {
            dispatch(addExpense({description: 'TEST', amount: 0}))
            navigation.goBack()
        }

    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Button style={styles.button} mode='flat' onPress={cancel}>Cancel</Button>
                <Button style={styles.button} onPress={confirm}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
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
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    }
})
export default ManageExpenses;
