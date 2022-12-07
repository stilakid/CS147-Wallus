import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Themes } from "../../../assets/themes";
import { Controller } from "react-hook-form";


export default function AppInput({control, name, rules = {}, placeholder, secureTextEntry=false}) {
    
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <View style={[styles.container, {borderColor: error? Themes.colors.error_500 : Themes.colors.neutral_200}]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={[styles.input]}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (
                        <Text>{error.message || 'Error' }</Text>
                    )}
                </>
            )}
        />
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        width: '100%',
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
        borderRadius: 16,
        paddingVertical: 12,
        marginVertical: 5,

        },
    input: {
        fontSize: Themes.typography.paragraph_text_2.size,
        fontFamily: Themes.typography.paragraph_text_2.font,
    },
    
});