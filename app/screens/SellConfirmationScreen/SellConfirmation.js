// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Header from "../../components/Header/header";
import InvestmentDisplayCard from "../../components/Cards/InvestmentDisplayCard";
import BorderedFlatlist from "../../components/BorderedList/borderedFlatlist";
import { useState } from "react";
import BorderedCheckList from "../../components/BorderedCheckList/BorderedCheckList";
import { TextInput } from "react-native-gesture-handler";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function SellConfirmationScreen ({navigation, route}){
    const [value, setValue] = useState(0)
    const [input, setInput] = useState(null)
    console.log('Value is',{value});
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleBoldOne style={{width:358, marginBottom:24}}>Sell confirmation</AppText.TitleBoldOne>
            <InvestmentDisplayCard 
                cardType={'horizontal'} 
                companyName={'SPK 500'} 
                logoURL={Images.company.tesla}  
                status={'growing'} 
                stockPrice={'USD24.32'}
                recRationale={'Invested by Dan'}
                style={[styles.borderedContainer, {marginBottom: 12}]}
            />
            <BorderedFlatlist
                data={[
                    {
                        id: '1',
                        text: 'You are selling',
                        value: 'USD 24.52',
                        tooltip: 'this is the tooltip text of the list item'
                    }
                ]}
            />
            <AppText.TitleSemiBoldFour style={{marginTop:24, width: 358, marginBottom:12}}>What was your decision rationale?</AppText.TitleSemiBoldFour>
            <BorderedCheckList
                data={[
                    {
                        id: '1',
                        text: 'Get cash',
                    },
                    {
                        id: '2',
                        text: 'No longer aligned with your goals',
                    },
                    {
                        id: '3',
                        text: 'Friends are not investing in it anymore',
                    },
                ]} 
                style={{marginBottom:12}} 
            />
            <TextInput
                style={styles.input}
                onChangeText={setInput}
                value={input}
                placeholder="Write down any unlisted reasons..."
                keyboardType="default"
                placeholderTextColor={Themes.colors.neutral_500}
            />
            <AppFloatingButton.PrimaryThickOne text={'Complete'}/>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        height: '100%',
    },
    borderedContainer: {
        borderRadius: 16,
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
    },
    input: {
        backgroundColor: Themes.colors.neutral_100,
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
        width: 358,
        borderRadius: 16,
        padding: 12,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,

    }
})