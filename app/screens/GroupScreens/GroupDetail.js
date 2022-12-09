// import React from 'react';
import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, Pressable, TouchableWithoutFeedback, Touchable } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import Header from "../../components/Header/header";
import { BorderedList } from "../../components/BorderedList/borderedListOld";
import { TrendTags } from "../../components/TrendTags/TrendTags";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import { InvestmentStat } from "../../components/BorderedList/borderedList";
import WallusTips from "../../components/Cards/WallusTips/WallusTips";
import { useState } from "react";

// Lucide Icons
import { ChevronRight } from 'lucide-react-native';
import InvestmentDetailCard from "../../components/Cards/InvestmentDetailCard/InvestmentDetailCard";
import { GroupStats } from "../../components/BorderedList/groupBoarderedList";
import RationaleCard from "../../components/Cards/RationaleCard";

// database
import investmentGroups from "../../../assets/stockData/investmentGroups";
import { color } from "react-native-reanimated";
import joiningGroup from "../../../assets/stockData/joiningGroup";


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
    const groupID = route.params.group;
    let group 
    console.log(groupID);
    if (groupID == 'friendlyBanana'){
        group = joiningGroup['friendlyBanana'];
    } else {
        group = investmentGroups[groupID];
    }

    const friend = group.friend;
    //the two featured rationale cards
    const firstRationaleFriend = friend[Object.keys(friend)[0]];
    const secRationaleFriend = friend[Object.keys(friend)[1]];

    //control stacked button expansion
    const [buttonExpanded, setButtonExpanded] = useState(false)
    let buttonDisplayed
    if (buttonExpanded == true) {
        buttonDisplayed = <AppFloatingButton.PrimaryThickTriple 
            textOne='Invite friends' 
            textTwo={'Buy'} 
            textThree={'Sell'} 
            onPressOne={() => navigation.navigate('Select Friends')} 
            onPressTwo={() => navigation.navigate('Buy', {dataSource:'investmentGroups', key: groupID, firstPurchase: false})} 
            onPressThree={() => navigation.navigate('Sell', {dataSource: 'investmentGroups', key:groupID})}
        />
    } else {
        buttonDisplayed = <AppFloatingButton.PrimarySecondaryThickDual
            textOne={'Invite friends'}
            textTwo={'Trade options'}
            onPressOne = {()=> navigation.navigate("Select Friends")}
            onPressTwo={()=> setButtonExpanded(true)}
            />
    }

    //determine which tag to display based on route.params
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
                
                <TouchableWithoutFeedback style={{width: '100%'}} onPress={()=> setButtonExpanded(false)}>
                    <View style={{width:'100%', alignItems: 'center'}}>
                        <View style={styles.groupCard}>
                            <View style={styles.pics}>
                                
                                <Image style={styles.groupPic} source={group.groupPicURL}></Image>
                                
                                <View style={styles.members}>
                                    <Pressable onPress={()=>navigation.navigate('Member Screen')}>
                                        <Image style={{width: 128, height: 32, marginBottom: 8}} source={group.memberPicURL}></Image>
                                    </Pressable>
                                    <AppText.LabelSemiBoldTwo>5 members</AppText.LabelSemiBoldTwo>
                                </View>
                            </View>
                            <View style={styles.words}>
                                <AppText.LabelBoldFour style={{marginBottom:8}}>{group.groupName}</AppText.LabelBoldFour>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    {trendTagdisplayed}
                                    <AppText.TitleSemiBoldFour style={{marginLeft:8, marginTop: 5}}>{group.companyName}</AppText.TitleSemiBoldFour>
                                </View>
                            </View>
                        </View>
                        <AppButton.SecondaryOutlineThickOne TouchableOpacityStyle={{marginBottom: 24}} text="Enter Chatroom" onPress={() => navigation.navigate('Chat Screen')}></AppButton.SecondaryOutlineThickOne>

                        <Divider.Horizontal />

                        <WallusTips.green titleText={'Hold is recommended'} bodyText={'Index funds tend to maintain positive growth overtime despite temporary descreases'} />
                        <InvestmentDetailCard investAmount={group.investAmount}></InvestmentDetailCard>
                        <View style={{marginVertical: 24, width: '100%'}}>
                            <GroupStats boughtAt={group.boughtAt} currentPrice={group.stockPrice} investingFor={group.investingFor} typicalHold={group.typicalHold}></GroupStats>
                        </View>

                        <Divider.Horizontal />

                        <View style={styles.rationale}>
                            <View style={styles.rationaleHeader}>
                                <View style={styles.rationalelil}>
                                    <AppText.TitleSemiBoldThree>Why your friends joined</AppText.TitleSemiBoldThree>
                                </View>
                                <AppButton.rightArrow 
                                    onPress={() => navigation.navigate('Rationale',{friend:friend})}
                                />
                            </View>
                            <RationaleCard
                                name={firstRationaleFriend.name}
                                profileURL={firstRationaleFriend.profilePicURL}
                                date={firstRationaleFriend.dateCommented}
                                rationale={firstRationaleFriend.rationale}
                                style={{marginBottom:12}}
                            />
                            <RationaleCard
                                name={secRationaleFriend.name}
                                profileURL={secRationaleFriend.profilePicURL}
                                date={secRationaleFriend.dateCommented}
                                rationale={secRationaleFriend.rationale}
                            />
                        </View>

                        <Divider.Horizontal />

                        <WallusTips.white titleText='Stock information' bodyText={group.stockInfo} style={{marginBottom: 80}} />
                        {/* <View style={{height: 60}}></View> */}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>

            {buttonDisplayed}

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
        resizeMode: 'contain'
    },
    endOfPage: {
        marginBottom: 80
    },
    groupCard: {
        alignItems: "flex-start",
        width: '100%',
        marginBottom: 24,
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
        alignItems:"flex-end",
    },
    words: {
        alignItems: 'flex-start',
        marginBottom:16,
    },
    rationale: {
        marginVertical: 24,
        width: '100%'
    },
    rationaleHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        width: '100%'
    },
    rationalelil: {
        flex: 1
    }
});