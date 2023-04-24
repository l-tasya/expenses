import React, {useMemo} from 'react';
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {useSelector} from "react-redux";
import {AppRootState} from "../store/store";
import {Expense} from "../store/extensesReducer";
import {getDateMinusDays} from "../util/date";


const RecentExpenses = () => {
    const expenses = useSelector<AppRootState, Expense[]>(t => t.expenses.expenses)

    const recentExpenses = useMemo(()=>expenses.filter((expense)=>{
        const today = new Date
        const date7DaysAgo = getDateMinusDays(today, 7)
        //converting string to Date object(optimization)
        const expenseDate = new Date(expense.date)
        return expenseDate > date7DaysAgo
    }),[expenses, getDateMinusDays])
    return <ExpensesOutput expenses={recentExpenses} expensesPeriod={'Last 7 Days'}/>;
};
export default RecentExpenses;
