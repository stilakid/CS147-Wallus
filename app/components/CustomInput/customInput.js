import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Themes } from "../../../assets/themes";
import { Controller } from "react-hook-form";


export default function AppInput({control, name, rules = {}, placeholder, secureTextEntry=false, TextStyle, ContainerStyle}) {
    
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <View style={[styles.container, {borderColor: error? Themes.colors.error_500 : Themes.colors.neutral_200}, ContainerStyle]}>
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={[styles.input, TextStyle]}
                            secureTextEntry={secureTextEntry}
                            placeholderTextColor={Themes.colors.neutral_500}
                            keyboardType={'default'}
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
        // width: '100%',
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
        borderRadius: 16,
        padding: 12,
        marginVertical: 5,

        },
    input: {
        fontSize: Themes.typography.paragraph_text_2.size,
        fontFamily: Themes.typography.paragraph_text_2.font,
        color: Themes.colors.neutral_800,
        backgroundColor: Themes.colors.white,
    },
    
});