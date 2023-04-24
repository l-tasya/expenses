import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";
import {GlobalStyles} from "../../../constants/styles";
import {getFormattedDate} from "../../../util/date";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

interface IProps {
    date: string
    description: string
    amount: number
    id: string
}

const ExpenseItem: React.FC<IProps> = ({date, amount, description, id}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    function expensePressHandler() {
        navigation.navigate('ManageExpenses', {id: id})
    }
    return (
        <Pressable style={({pressed})=>pressed&&styles.pressed} onPress={expensePressHandler}>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.amount}>${amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
};
const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75,
    },
    expenseItem: {
        flexDirection: 'row',
        flex: 1,
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        justifyContent: "space-between",
        borderRadius: 6,
        elevation: 3,
        //IOS
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
    },
    textBase: {
        color: GlobalStyles.colors.primary50,

    },
    description:{
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    priceContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 100,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
    }
})
export default ExpenseItem;
