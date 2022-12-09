// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import Header from "../../components/Header/header";
import { BorderedList } from "../../components/BorderedList/borderedListOld";
import { TrendTags } from "../../components/TrendTags/TrendTags";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import { InvestmentStat } from "../../components/BorderedList/borderedList";
import WallusTips from "../../components/Cards/WallusTips/WallusTips";
import TrendChart from "../../components/TrendChart/TrendChart";

// Lucide Icons
import { ChevronLeft } from 'lucide-react-native';

// Data
import dailyMovers from "../../../assets/stockData/dailyMovers";
import recInvestment from "../../../assets/stockData/recInvestment";


const investmentInfo = [
    {
        id: 1,
        statName: 'Expected return',
        tooltip: 'Hello',
        stat: '3.1%'
    },
    {
        id: 2,
        statName: 'Volatility',
        tooltip: 'Hello',
        stat: 'Medium'
    },
    {
        id: 3,
        statName: 'Typical Hold',
        tooltip: 'Hello',
        stat: '4Y 3M'
    },
];

const portfolioFit= [
    {
        id: 1,
        statName:'Portfolio fit',
        tooltip: 'text',
        stat: 'Great',
        statBackgroundColor: 'green'
    }
]




{/* <Home color="black" size={24} />; */}
export default function StockScreen({navigation, route}) {

    const dataSource = route.params.dataSource;
    const stockID = route.params.stock;
    let stock;
    if (dataSource == 'dailyMovers'){
        stock = dailyMovers[stockID];
    } else {
        stock = recInvestment[stockID];
    };

    //determine which trend tag to display based on route.params
    let trendTagdisplayed;
    if (stock.status == 'stable'){
        trendTagdisplayed= <TrendTags.smallBlue tagText={'Stable'}/>
    } else if (stock.status == 'growing') {
        trendTagdisplayed = <TrendTags.smallGreen tagText={'Growing'}/>
    } else {
        trendTagdisplayed = <TrendTags.smallOrange tagText={'Unstable'}/>
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} >
                <Header text="" navigation={navigation} hasDivider={false} />
                <View style={styles.bannerContainer}>
                    <Image source={stock.logoURL} style={{width:48,height:48, marginBottom: 16}}/>
                    <View style={{flexDirection:'row', alignItems: 'center', marginBottom: 16}}>
                        <AppText.TitleSemiBoldTwo style={{marginRight: 8}}>{stock.companyName}</AppText.TitleSemiBoldTwo>
                        {trendTagdisplayed}
                    </View>
                    <AppText.TitleBoldOne>{stock.stockPrice}</AppText.TitleBoldOne>
                </View>

                <TrendChart trendGraphURL={Images.trendCharts.trend2} />

                <WallusTips.orange titleText={'Not aligned with your preference'} bodyText={'This is a text that explains the reason why it does not match'} />

                <InvestmentStat stock={stock.companyName} portfolioFit={'Great'} market={'12.38%'} sp500={'12.88%'} expectedReturn={'3.1%'} volatility={'Medium'} typicalHold={'4Y 3M'} />
                <WallusTips.bordered titleText={'Stock information'} bodyText={stock.stockInfo} style={styles.endOfPage}></WallusTips.bordered>
            </ScrollView>

            <AppFloatingButton.PrimaryThickDual textOne='Decline' textTwo={'Accept'} onPressOne={() => navigation.navigate('No Dan')} onPressTwo={() => navigation.navigate('Congrats')} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        height: '100%',
    },
    scrollView: {
        width: '100%',
    },
    scrollViewContent: {
        display: 'flex',
        alignItems: "center",
        marginHorizontal: 16
    },
    portfolioFit: {
        marginBottom: 12,
    },
    wallusTips: {
        marginVertical: 24,
        borderRadius: 16
    },
    stockDetailsButton: {
        marginTop: 26,
    },
    banner: {
        width: '100%',
        resizeMode: 'contain',
    },
    bannerContainer: {
        width: '100%',
        marginVertical: 24,
    },
    trendChart: {
        width: '100%',
        resizeMode: 'contain',
    },
    trendChartContainer: {
        width: '100%',
        paddingHorizontal: 30,
    },
    endOfPage: {
        marginBottom: 80
    }
});



// Branch

// Main
// Main Branch How is it going??
