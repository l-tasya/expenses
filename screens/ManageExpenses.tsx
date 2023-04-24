import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../App";
import IconButton from "../components/UI/IconButton/IconButton";
import {GlobalStyles} from "../constants/styles";
import Button from "../components/UI/Button/Button";

const ManageExpenses = ({route, navigation}: NativeStackScreenProps<RootStackParamList, 'ManageExpenses'>) => {
    const editedExpenseId = route.params?.id;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit expense' : 'Add Expense',
        })
    }, [isEditing, navigation])


    function deleteExpense() {
        navigation.goBack()
    }

    function cancel() {
        navigation.goBack()
    }

    function confirm() {
        navigation.goBack()
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