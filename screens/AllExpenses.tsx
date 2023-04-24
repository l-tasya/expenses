import React from 'react';
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useSelector} from "react-redux";
import {AppRootState} from "../store/store";
import {Expense} from "../store/extensesReducer";


const AllExpenses = () => {
    const expenses = useSelector<AppRootState, Expense[]>(t => t.expenses.expenses)
    return <ExpensesOutput expenses={expenses} expensesPeriod={'Total'}/>;
};
export default AllExpenses;
