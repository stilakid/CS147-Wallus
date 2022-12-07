// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, Keyboard } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Header from "../../components/Header/header";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function BuyConfirmationScreen ({navigation, route}){
    const [value, setValue] = useState(0)
    const [input, setInput] = useState(null)
    console.log('Value is',{value});
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleSemiBoldThree style={styles.title}>What's your user name?</AppText.TitleSemiBoldThree>
            <AppText.ParagraphTwo style={styles.para}>Your user name will be used to uniquely identify you on Wallus and visible to other app users. </AppText.ParagraphTwo>
            <TextInput
                style={styles.input}
                onChangeText={setInput}
                onPressOut={() => {Keyboard.dismiss()}}
                value={input}
                placeholder="Type in your user name..."
                keyboardType="default"
                placeholderTextColor={Themes.colors.neutral_500}
            />
            <AppFloatingButton.PrimaryThickOne text={'Continue'}/>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        height: '100%',
    },
    input: {
        alignItems: 'center',
        width: 358,
        height:48,
        backgroundColor: '#FFFFFF',
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
        borderRadius: 16,
        padding: 12,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        textAlign: 'center',
        color: Themes.colors.neutral_800,
    },
    title: {
        width: 358,
        height: 24,
        textAlign: 'center',
        marginBottom: 40,
        color: Themes.colors.neutral_800,
    },
    para: {
        width: 313,
        height: 72,
        textAlign: 'center',
        marginBottom: 24,
        color: Themes.colors.neutral_800,
    }
})