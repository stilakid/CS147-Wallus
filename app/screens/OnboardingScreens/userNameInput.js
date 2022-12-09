// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, Keyboard } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Header from "../../components/Header/header";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import AppInput from "../../components/CustomInput/customInput";
import { useForm } from "react-hook-form";
import { supabase } from "../../../supabase";

export default function UserNameInputScreen ({navigation, route}){
    const { control, handleSubmit } = useForm();

    const onContinuePressed = async (data) => {
        // navigation.navigate('Register Screen');

        // const {error} = await supabase.from('profiles').update(
        //     {
        //         username: data.username,
        //     },
        // ).eq(email: );

        // const { user, error } = await supabase.auth.updateUser({
        //     data: { username: data.username }
        // });

        // if (error) {
        //     console.log('error', error);
        //     console.warn('error', error);
        //     return;
        // }
        
        navigation.navigate('Investment Experience Screen');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleSemiBoldThree style={styles.title}>What's your user name?</AppText.TitleSemiBoldThree>
            <AppText.ParagraphTwo style={styles.para}>Your user name will be used to uniquely identify you on Wallus and visible to other app users. </AppText.ParagraphTwo>
            <AppInput
                name="username"
                control={control}
                placeholder={'Type in your user name...'}
                rules={{
                    required: 'Username is required',
                }}
                style={styles.input}
            />
            <AppFloatingButton.PrimaryThickOne text={'Continue'} onPress={handleSubmit(onContinuePressed)} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        height: '100%',
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