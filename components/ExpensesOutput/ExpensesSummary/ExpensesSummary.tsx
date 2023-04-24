import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Expense} from "../ExpensesOutput";
import {GlobalStyles} from "../../../constants/styles";

interface IProps {
    periodName: any
    expenses: Expense[]
}

const ExpensesSummary = ({expenses, periodName}: IProps) => {
    const expensesSum = expenses.reduce((sum, expense)=>{
        return sum + expense.amount
    }, 0)
    return (<View style={styles.expenseItem}>
        <Text style={styles.period}>{periodName}</Text>
        <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>)
};
const styles = StyleSheet.create({
    expenseItem: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    period: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    }
})
export default ExpensesSummary;
