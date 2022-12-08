// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

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
import dailyMovers from "../../../assets/stockData/dailyMovers";
import recInvestment from "../../../assets/stockData/recInvestment";
import investmentGroups from "../../../assets/stockData/investmentGroups";

export default function BuyScreen ({navigation, route}){
    const dataSource = route.params.dataSource;
    const key = route.params.key
    const firstPurchase = route.params.firstPurchase;
    let stock;
    if (dataSource == 'dailyMovers'){
        stock = dailyMovers[key];
    } else if (dataSource == 'recInvestment'){
        stock = recInvestment[key];
    } else {
        stock = investmentGroups[key]
    }

    console.log(dataSource);

    const [value, setValue] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleBoldOne style={{width:358, marginBottom:24}}>You are buying</AppText.TitleBoldOne>
            <InvestmentDisplayCard 
                cardType={'horizontal'} 
                companyName={stock.companyName} 
                logoURL={stock.logoURL} 
                status={stock.status} 
                stockPrice={stock.stockPrice}
                recRationale={'Invested by Dan'}
                style={[styles.borderedContainer, {marginBottom: 12}]}
            />
            <DropdownText 
                titleText={"What does buying a stock mean?"} 
                bodyText={"Sell refers to converting non-liquid (asset that cannot be easily converted to cash), into liquid proptery (similar to cash). In our case, that would be converting the S&P 500 stock into $56.67."}
                style={{marginBottom: 40}}
            />
            <MoneyAmountInput/>
            <AppFloatingButton.PrimaryThickOne text={'Review'} onPress={()=> navigation.navigate("Buy Confirmation", {key:key, dataSource:dataSource, firstPurchase: firstPurchase})}/>
            
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