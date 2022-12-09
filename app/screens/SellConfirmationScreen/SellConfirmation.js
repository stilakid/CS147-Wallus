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

//database
import dailyMovers from "../../../assets/stockData/dailyMovers";
import recInvestment from "../../../assets/stockData/recInvestment";
import investmentGroups from "../../../assets/stockData/investmentGroups";

export default function SellConfirmationScreen ({navigation, route}){
    const dataSource = route.params.dataSource;
    const key = route.params.key
    let stock;
    if (dataSource == 'dailyMovers'){
        stock = dailyMovers[key];
    } else if (dataSource == 'recInvestment'){
        stock = recInvestment[key];
    } else {
        stock = investmentGroups[key]
    }
    const [value, setValue] = useState(0)
    const [input, setInput] = useState(null)
    console.log('Value is',{value});
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerContent}>
                <Header navigation={navigation} hasDivider={false} />
                <AppText.TitleBoldOne style={{width:358, marginBottom:24}}>Sell confirmation</AppText.TitleBoldOne>
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
            </View>
            <AppFloatingButton.PrimaryThickOne text={'Complete'} onPress={() => navigation.navigate("Group Detail", {group: key})}/>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        height: '100%',
        width: '100%',
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