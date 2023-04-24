import React from 'react';
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useSelector} from "react-redux";
import {AppRootState} from "../store/store";
import {Expense} from "../store/extensesReducer";


const RecentExpenses = () => {
    const expenses = useSelector<AppRootState, Expense[]>(t => t.expenses.expenses)
    return <ExpensesOutput expenses={expenses} expensesPeriod={'Last 7 Days'}/>;
};
export default RecentExpenses;
