import React from 'react';
import {StyleSheet, View} from "react-native";
import ExpensesSummary from "./ExpensesSummary/ExpensesSummary";
import ExpensesList from "./ExpensesList/ExpensesList";
import {GlobalStyles} from "../../constants/styles";
import {Expense} from "../../store/extensesReducer";


interface IProps {
    expenses: Expense[]
    expensesPeriod: any
}



const ExpensesOutput: React.FC<IProps> = ({expenses, expensesPeriod}) => {
    return (<View style={styles.expenseItem}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses}/>
        </View>
    );
};
const styles = StyleSheet.create({
    expenseItem: {
        flex: 1,
        padding: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,


    }
})
export default ExpensesOutput;
