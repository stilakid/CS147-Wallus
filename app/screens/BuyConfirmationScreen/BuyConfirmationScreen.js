// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, Keyboard } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Header from "../../components/Header/header";
import InvestmentDisplayCard from "../../components/Cards/InvestmentDisplayCard";
import BorderedFlatlist from "../../components/BorderedList/borderedFlatlist";
import { useState } from "react";
import BorderedCheckList from "../../components/BorderedCheckList/BorderedCheckList";
import { TextInput } from "react-native-gesture-handler";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

//database
import dailyMovers from "../../../assets/stockData/dailyMovers";
import recInvestment from "../../../assets/stockData/recInvestment";
import investmentGroups from "../../../assets/stockData/investmentGroups";

export default function BuyConfirmationScreen ({navigation, route}){
    const dataSource = route.params.dataSource;
    const key = route.params.key;
    const firstPurchase = route.params.firstPurchase;

    console.log(dataSource);
    let stock;
    if (dataSource == 'dailyMovers'){
        stock = dailyMovers[key];
    } else if (dataSource == 'recInvestment'){
        stock = recInvestment[key];
    } else {
        stock = investmentGroups[key]
    }

    //determine which page "complete" would lead to based on first purchase or not. If first purhchase
    //button leads to home, if not it leads to investment group page
    let buttonDisplayed;
    if (firstPurchase==true) {
        buttonDisplayed = <AppFloatingButton.PrimaryThickOne text={'Complete'} onPress={() => navigation.popToTop()}/>
    } else {
        buttonDisplayed = <AppFloatingButton.PrimaryThickOne text={'Complete'} onPress={() => navigation.navigate("Group Detail", {group: key})}/>
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerContent}>

                <Header navigation={navigation} hasDivider={false} />
                <AppText.TitleBoldOne style={{marginBottom:24}}>Purchase confirmation</AppText.TitleBoldOne>
                <InvestmentDisplayCard 
                    cardType={'horizontal'} 
                    companyName={stock.companyName} 
                    logoURL={stock.logoURL} 
                    status={stock.status} 
                    stockPrice={stock.stockPrice}
                    style={[styles.borderedContainer, {marginBottom: 12}]}
                />
                <BorderedFlatlist
                    data={[
                        {
                            id: '1',
                            text: 'You are buying',
                            value: 'USD 5.23',
                            tooltip: 'this is the tooltip text of the list item'
                        }
                    ]}
                />
                <AppText.TitleSemiBoldFour style={{marginTop:24, marginBottom:12}}>What was your decision rationale?</AppText.TitleSemiBoldFour>
                <BorderedCheckList
                    data={[
                        {
                            id: '1',
                            text: 'Diversify your portfolio',
                        },
                        {
                            id: '2',
                            text: 'Join your friends',
                        },
                        {
                            id: '3',
                            text: 'Aligns with your long term goal',
                        },
                    ]} 
                    style={{marginBottom:12}} 
                />
                <TextInput
                    style={styles.input}
                    onPressOut={() => {Keyboard.dismiss()}}
                    placeholder="Write down any unlisted reasons..."
                    keyboardType="default"
                    placeholderTextColor={Themes.colors.neutral_500}
                />
            </View>
            {buttonDisplayed}
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        height: '100%',
        width: '100%'
    },
    containerContent: {
        marginHorizontal: 16,
        height: '100%'
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
        borderRadius: 16,
        padding: 12,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,

    }
})