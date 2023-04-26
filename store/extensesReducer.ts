import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';


export type Expense = {
    id: string,
    amount: number,
    description: string,
    date: string,
}

type InitialState = {
    expenses: Expense[]
}
const initialState: InitialState = {
    expenses: [
        {id: uuidv4(), amount: 30.032, description: 'G435', date:'2022-05-23'},
        {id: uuidv4(), amount: 290.24, description: 'Google Pixel 6a', date:'2022-04-14'},
        {id: uuidv4(), amount: 549.99, description: 'Legion Y17', date:'2022-01-19'},
        {id: uuidv4(), amount: 19.99, description: 'Great Gatsby', date:'2023-04-20'},
        {id: uuidv4(), amount: 23.99, description: '.... Park', date:'2023-09-19'},
        {id: uuidv4(), amount: 1.09, description: 'Road', date:'2022-09-29'},
        {id: uuidv4(), amount: 9.30, description: 'Charger', date:'2022-03-14'},
        {id: uuidv4(), amount: 15.79, description: 'Keyboard', date:'2021-02-3'},
        {id: uuidv4(), amount: 6.091, description: 'Phone Glass', date:'2023-02-24'},
    ]
}

type UpdatePayload = {
    description: string,
    amount: number,
    date: string
}
const slice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense(state, action: PayloadAction<{ description: string, amount: number, date: string }>) {
            const newItem: Expense = {
                id: `${Math.random()+3}`+'added',
                amount: action.payload.amount,
                date: action.payload.date,
                description: action.payload.description
            }
            state.expenses.unshift(newItem)
        },
        removeExpense(state, action: PayloadAction<{ id: string }>) {
            state.expenses = state.expenses.filter(t => t.id !== action.payload.id)
        },
        updateExpense(state, action: PayloadAction<{expenseID: string, expensePayload: UpdatePayload}>){
            const index = state.expenses.findIndex(t=>t.id === action.payload.expenseID)
            if(index > -1){
                state.expenses[index].description = action.payload.expensePayload.description
                state.expenses[index].amount = action.payload.expensePayload.amount
                state.expenses[index].date = action.payload.expensePayload.date
            }

        }
    }
})
export const {updateExpense,removeExpense,addExpense} = slice.actions


export default slice;
