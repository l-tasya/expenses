import React from 'react';
import {StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle} from "react-native";
import {GlobalStyles} from "../../constants/styles";

type IProps = TextInputProps & {
    label: string,
    style?: ViewStyle

}


const Input = ({label, style, ...restProps}: IProps) => {
    let inputStyles: StyleProp<TextStyle> = [styles.input];
    if (restProps.multiline) {
        inputStyles = [...inputStyles, styles.inputM]
    }
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} placeholderTextColor={GlobalStyles.colors.primary100} {...restProps}/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary50,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary50,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700,
    },
    inputM: {
        minHeight: 100,
        textAlignVertical: 'top',
    }
})
export default Input;
