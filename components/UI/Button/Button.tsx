import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from "react-native";
import {GlobalStyles} from "../../../constants/styles";

interface IProps {
    onPress: () => void
    children: React.ReactNode
    mode?: 'flat'| 'default',
    style?: ViewStyle,
    disabled?: boolean
}


const Button: React.FC<IProps> = ({children, onPress, mode ='default', style,disabled=false}) => {
    return (
        <View style={style}>
            <Pressable disabled={disabled} onPress={onPress} style={({pressed}) =>pressed && styles.pressed}>
                <View style={[styles.button, mode ==='flat' && styles.flat, disabled && styles.disabled]}>
                    <Text style={[styles.buttonText,  mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText:{
        color: 'white',
        textAlign: 'center',
    },
    flatText: {
        color: GlobalStyles.colors.primary200
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4,
    },
    disabled: {
        backgroundColor: GlobalStyles.colors.gray500,
        opacity: 0.5,
    }
})

export default Button;
