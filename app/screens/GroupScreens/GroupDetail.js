// import React from 'react';
import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, Pressable } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import Header from "../../components/Header/header";
import { BorderedList } from "../../components/BorderedList/borderedListOld";
import { TrendTags } from "../../components/TrendTags/TrendTags";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import { InvestmentStat } from "../../components/BorderedList/borderedList";
import WallusTips from "../../components/Cards/WallusTips/WallusTips";

// Lucide Icons
import { ChevronRight } from 'lucide-react-native';
import InvestmentDetailCard from "../../components/Cards/InvestmentDetailCard/InvestmentDetailCard";
import { GroupStats } from "../../components/BorderedList/groupBoarderedList";
import RationaleCard from "../../components/Cards/RationaleCard";


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
export default function GroupDetail({navigation, route}) {

    // const {  } = route.params;



    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} >
                <Header navigation={navigation} hasDivider={false} />
                <View style={styles.groupCard}>
                    <View style={styles.pics}>
                        
                        <Image style={styles.groupPic} source={require("../../../assets/potato.png")}></Image>
                        
                        <View style={styles.members}>
                            <Pressable onPress={()=>navigation.navigate('Member Screen')}>
                                <Image style={{width: 128, height: 32, resizeMode: 'contain'}} source={require('../../../assets/groupProfiles.png') }></Image>
                            </Pressable>
                            <AppText.LabelSemiBoldTwo>5 members</AppText.LabelSemiBoldTwo>
                        </View>
                    </View>
                    <View style={styles.words}>
                        <AppText.LabelBoldFour>Brave Potatoes</AppText.LabelBoldFour>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 151, height: 24}}>
                            <TrendTags.smallGreen tagText={"Growing"}></TrendTags.smallGreen>
                            <AppText.TitleSemiBoldFour style={{marginLeft:8, marginTop: 5}}>S&P 500</AppText.TitleSemiBoldFour>
                        </View>
                    </View>
                    <AppButton.SecondaryOutlineThickOne text="Enter Chatroom" onPress={() => navigation.navigate('Chat Screen')}></AppButton.SecondaryOutlineThickOne>
                </View>

                <Divider.Horizontal />
                <WallusTips.green titleText={'Hold is recommended'} bodyText={'Index funds tend to maintain positive growth overtime despite temporary descreases'} />

                {/* <BorderedList.InvestmentStat data={portfolioFit} data_primary_key={(item) => item.id} FlatListStyle={styles.portfolioFit} />

                <BorderedList.InvestmentStat data={investmentInfo} data_primary_key={(item) => item.id} /> */}
                
                <InvestmentDetailCard></InvestmentDetailCard>
                <View style={{marginVertical: 24, width: 390}}>
                    <GroupStats boughtAt="USD 45.88" currentPrice='USD 45.88' investingFor='1Y 3M' typicalHold='4Y 3M'></GroupStats>
                </View>
                <Divider.Horizontal />
                <View style={styles.rationale}>
                    <View style={styles.rationaleHeader}>
                        <View style={styles.rationalelil}>
                            <AppText.TitleSemiBoldThree>Why your friends joined</AppText.TitleSemiBoldThree>
                        </View>
                        <AppButton.rightArrow navigation={navigation}></AppButton.rightArrow>
                    </View>
                    <View style={{width: 358, height: 170, flexDirection: 'column', alignItems: 'flex-start'}}>
                        <RationaleCard></RationaleCard>
                        <View style={{marginTop: 91}}>
                            <RationaleCard></RationaleCard>
                        </View>
                    </View>
                </View>
                <Divider.Horizontal />
                <WallusTips.white titleText='Stock information' bodyText='The Standard and Poor 500, or the S&P 500, is a stock market index tracking the stock performance of 500 large companies listed on stock exchanges in the United States. It is one of the most commonly followed equity indices.'>

                </WallusTips.white>
                <View style={{height: 60}}></View>
            </ScrollView>

            <AppFloatingButton.PrimaryThickTriple textOne='Invite Friends' textTwo={'Buy'} textThree={'Sell'} onPressOne={() => navigation.navigate('Invitation')} onPressTwo={() => navigation.navigate('Buy')} onPressThree={() => navigation.navigate('Sell')}/>
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
        resizeMode: 'contain'
    },
    endOfPage: {
        marginBottom: 80
    },
    groupCard: {
        alignItems: "flex-start",
        width: 358,
        height: 204
    },
    pics: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 64,
        width: 358,

    },
    groupPic: {
        width: 64,
        height: 64,
        flexDirection: 'row',
        alignItems: 'flex-end',

    },
    members: {
        width: 128,
        height: 58,
        alignItems:"flex-end",
        justifyContent: 'center'
    },
    words: {
        height: 60,
        alignItems: 'flex-start'
    },
    rationale: {
        height: 210,
        marginVertical: 24,
    },
    rationaleHeader: {
        height: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rationalelil: {
        width: 318
    }
});