import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';


export type Expense = {
    id: string,
    amount: number,
    description: string,
    date: Date,
}

type InitialState = {
    expenses: Expense[]
}
const initialState: InitialState = {
    expenses: [
        {id: uuidv4(), amount: 30.032, description: 'G435', date: new Date('2023-05-23')},
        {id: uuidv4(), amount: 290.24, description: 'Google Pixel 6a', date: new Date('2023-04-14')},
        {id: uuidv4(), amount: 549.99, description: 'Legion Y17', date: new Date('2022-01-19')},
        {id: uuidv4(), amount: 19.99, description: 'Great Gatsby', date: new Date('2023-09-19')},
        {id: uuidv4(), amount: 23.99, description: '.... Park', date: new Date('2023-09-19')},
        {id: uuidv4(), amount: 1.09, description: 'Road', date: new Date('2022-09-29')},
        {id: uuidv4(), amount: 9.30, description: 'Charger', date: new Date('2023-03-14')},
        {id: uuidv4(), amount: 15.79, description: 'Keyboard', date: new Date('2021-02-3')},
    ]
}


const slice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
        addExpense(state, action: PayloadAction<{ description: string, amount: number }>) {
            const newItem: Expense = {
                id: uuidv4(),
                amount: action.payload.amount,
                date: new Date(),
                description: action.payload.description
            }
            state.expenses.push(newItem)
        },
        removeExpense(state, action: PayloadAction<{ id: string }>) {
            state.expenses.filter(t => t.id !== action.payload.id)
        }
    }
})


export default slice;
