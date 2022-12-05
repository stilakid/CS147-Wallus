// import React from 'react';
import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Header from "../../components/Header/header";
import InvestmentDisplayCard from "../../components/Cards/InvestmentDisplayCard";
import DropdownText from "../../components/DropdownText/DropdownText";
import MoneyAmountInput from "../../components/MoneyAmontInput/MoneyAmountInput";
import { useState } from "react";

export default function BuyScreen ({navigation, route}){
    const [value, setValue] = useState(0)
    console.log({value});
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleBoldOne style={{width:358, marginBottom:24}}>You are buying</AppText.TitleBoldOne>
            <InvestmentDisplayCard 
                cardType={'horizontalRecRationale'} 
                companyName={'SPK 500'} 
                logoURL={'../../../assets/tesla.png'} 
                status={'growing'} 
                stockPrice={'USD24.32'}
                recRationale={'Invested by Dan'}
                style={[styles.borderedContainer, {marginBottom: 12}]}
            />
            <DropdownText 
                titleText={"What does buying a stock mean?"} 
                bodyText={"Sell refers to converting non-liquid (asset that cannot be easily converted to cash), into liquid proptery (similar to cash). In our case, that would be converting the S&P 500 stock into $56.67."}
                style={{marginBottom: 40}}
            />
            <MoneyAmountInput/>
            <AppFloatingButton.PrimaryThickOne text={'Review'} onPress={()=> navigation.navigate("Buy Confirmation")}/>
            
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
    }
})