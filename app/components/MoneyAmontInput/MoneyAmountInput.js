import { Themes } from "../../../assets/themes"
import React, { useState } from 'react';

// Components
import { StyleSheet, Text, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import { SelectionOptions } from "../SelectionOptions/SelectionOptions";
import { Outfit_600SemiBold } from "@expo-google-fonts/outfit";

export default function MoneyAmountInput (){
    const [number, onChangeNumber] = useState(null);
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.usd}>USD</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="0"
                        keyboardType="numeric"
                        placeholderTextColor={Themes.colors.neutral_400}
                    />
                </View>
                <View style={styles.optionContainer}>
                    <Pressable onPress={() => {onChangeNumber(number+1)}}>
                        <SelectionOptions.border_Unselected_32px text={"5"}></SelectionOptions.border_Unselected_32px>
                    </Pressable>
                    <Pressable>
                        <SelectionOptions.border_Unselected_32px text={"10"}></SelectionOptions.border_Unselected_32px>
                    </Pressable>
                    <Pressable>
                        <SelectionOptions.border_Unselected_32px text={"50"}></SelectionOptions.border_Unselected_32px>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
      },
    inputContainer :{
        flexDirection: 'row',
        alignItems: 'center',
    },
    usd: {
        fontFamily: 'Outfit_600SemiBold',
        color: Themes.colors.neutral_800,
        fontSize: 40,
        marginRight: 8,
    },
    input: {
        fontFamily: 'Outfit_600SemiBold',
        color: Themes.colors.neutral_800,
        fontSize: 80,
    },
    optionContainer: {
        width:124,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    }
});

