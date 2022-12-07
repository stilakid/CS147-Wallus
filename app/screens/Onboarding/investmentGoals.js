// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, Keyboard, Touchable} from "react-native";
import { AppText } from "../../components/CustomText/customText";
import Header from "../../components/Header/header";
import { useState } from "react";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Checkbox from "../../components/Checkbox/Checkbox";

export default function BuyConfirmationScreen ({navigation, route}){
    const [value, setValue] = useState(0)
    const [input, setInput] = useState(null)
    console.log('Value is',{value});
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleSemiBoldThree style={styles.title}>Preference Settings</AppText.TitleSemiBoldThree>

            <View style={styles.group}>
                <AppText.LabelSemiBoldThree style={styles.goals}>Investing Goal(s) </AppText.LabelSemiBoldThree>
                <View style={styles.option}>
                    <View style={styles.text}>
                        <AppText.LabelBoldOne style={styles.top}>Make profits in short-term </AppText.LabelBoldOne>
                        <AppText.ParagraphTwo style={styles.bot}>Buying and selling stocks within months or years to incur profits.</AppText.ParagraphTwo>
                    </View>
                    <Checkbox></Checkbox>
                </View>

                <View style={styles.option2}>
                    <View style={styles.text}>
                        <AppText.LabelBoldOne style={styles.top}>Save for large costs </AppText.LabelBoldOne>
                        <AppText.ParagraphTwo style={styles.bot}>Utilizing stocks for nearer-term large purchases including children’s education,  </AppText.ParagraphTwo>
                        <AppText.ParagraphTwo style={styles.bot}>home, car, etc.  </AppText.ParagraphTwo>
                    </View>
                    <Checkbox></Checkbox>
                </View>

                <View style={styles.option2}>
                    <View style={styles.text}>
                        <AppText.LabelBoldOne style={styles.top}>Save for retirement </AppText.LabelBoldOne>
                        <AppText.ParagraphTwo style={styles.bot}>Invest for long-term security, by purchasing low-risk stocks and holding for    </AppText.ParagraphTwo>
                        <AppText.ParagraphTwo style={styles.bot}>many years.   </AppText.ParagraphTwo>
                    </View>
                    <Checkbox></Checkbox>
                </View>

                <View style={styles.option}>
                    <View style={styles.text}>
                        <AppText.LabelBoldOne style={styles.top}>Stay ahead of inflation </AppText.LabelBoldOne>
                        <AppText.ParagraphTwo style={styles.bot}>Store personal earnings in promising stocks to make profits just above inflation. </AppText.ParagraphTwo>
                    </View>
                    <Checkbox></Checkbox>
                </View>
            </View>


            <AppFloatingButton.PrimaryThickOne text={'Finish'}/>
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
        color: Themes.colors.neutral_800,
        marginBottom: 40,
    },
    group: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 358,
        height: 526
    },
    goals: {
        color: Themes.colors.neutral_800,
        marginBottom: 12
    },
    option: {
        flexDirection: 'row',
        width: 358,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 103
    },
    option2: {
        flexDirection: 'row',
        width: 358,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 127
    },
    text: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap:4,
        width: 304,
    },
    text2: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap:4,
        width: 304,
        height: 95
    },
    top: {
        color: Themes.colors.neutral_800,
        width: 304
    },
    bot: {
        color: Themes.colors.neutral_600,
        width: 304
    }
})