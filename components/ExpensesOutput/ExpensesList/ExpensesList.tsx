import React from 'react';
import {FlatList, ListRenderItemInfo} from "react-native";
import ExpenseItem from "./ExpenseItem";
import {Expense} from "../../../store/extensesReducer";

interface IProps {
    expenses: Expense[]
}

const ExpensesList: React.FC<IProps> = ({expenses}) => {
    return (
        <FlatList
            data={expenses}
            renderItem={(itemData: ListRenderItemInfo<Expense>) => {
                return <ExpenseItem
                    description={itemData.item.description}
                    date={itemData.item.date}
                    amount={itemData.item.amount}
                    id={itemData.item.id}
                />
            }}
            keyExtractor={item => item.id}
        />
    );
};
export default ExpensesList;
