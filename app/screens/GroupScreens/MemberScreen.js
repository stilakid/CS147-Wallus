// import React from 'react';
import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
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
import { MemberList } from "../../components/BorderedList/MemberList";

import investmentGroups from "../../../assets/stockData/investmentGroups";


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
export default function MemberScreen({navigation, route}) {
    // const {  } = route.params;
    const groupID = route.params.group;
    const group = investmentGroups[groupID];
    const friend = group.friend;

    let trendTagdisplayed;
    if (group.status == 'stable'){
        trendTagdisplayed= <TrendTags.smallBlue tagText={'Stable'}/>
    } else if (group.status == 'growing') {
        trendTagdisplayed = <TrendTags.smallGreen tagText={'Growing'}/>
    } else {
        trendTagdisplayed = <TrendTags.smallOrange tagText={'Unstable'}/>
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} >
                <Header navigation={navigation} hasDivider={false} />

                <View style={styles.groupCard}>
                    <View style={styles.pics}>
                        
                        <Image style={styles.groupPic} source={group.groupPicURL}></Image>
                        
                    </View>
                    
                    <View style={styles.words}>
                        <AppText.LabelBoldFour style={{marginBottom:8}}>{group.groupName}</AppText.LabelBoldFour>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            {trendTagdisplayed}
                            <AppText.TitleSemiBoldFour style={{marginLeft:8, marginTop: 5}}>{group.companyName}</AppText.TitleSemiBoldFour>
                        </View>
                    </View>
                </View>

                <Divider.Horizontal />
                <View style={{color: Themes.colors.neutral_800, marginVertical:16, marginLeft: 8, alignItems: 'flex-start'}}>
                    <AppText.TitleSemiBoldThree>5 Members</AppText.TitleSemiBoldThree>
                </View>
                <MemberList boughtAt="USD 45.88" currentPrice='USD 45.88' investingFor='1Y 3M' typicalHold='4Y 3M'></MemberList>
            </ScrollView>

    
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
        // alignItems: "center",
        paddingHorizontal: 16
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
        width: '100%',
        marginBottom:24,
    },
    pics: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
        width: '100%',

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