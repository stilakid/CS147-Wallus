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
import { Dimensions } from "react-native";

// Lucide Icons
import { ChevronLeft } from 'lucide-react-native';
import dailyMovers from "../../../assets/stockData/dailyMovers";

const windowWidth = Dimensions.get('window').width;

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
export default function InvitationAlex({navigation, route}) {

    // const {  } = route.params;



    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} >
                <Header text="Alex's Invitation" navigation={navigation} hasDivider={false} />
                
                {/* Invitation information */}
                <View style={{flexDirection:'row',justifyContent:'space-between', width: '100%', alignItems:'center', marginBottom: 24}}>
                    <Image style={{height:64, width:64}} source={Images.groupProfile.popcorn}/>
                    <View style={{alignItems:'flex-end'}}>
                        <Image style={{height:32, width: 128, marginBottom:8}} source={require('../../../assets/groupProfiles.png')}/>
                        <AppText.LabelSemiBoldThree>5 members</AppText.LabelSemiBoldThree>
                    </View>
                </View>
                <AppText.TitleSemiBoldThree style={{width:'100%', marginBottom: 8}}>Movers & Groovers </AppText.TitleSemiBoldThree>
                <View style={{flexDirection:'row', alignItems: 'center', width: '100%'}}>
                    <TrendTags.smallBlue tagText={'Stable'}/>
                    <AppText.TitleSemiBoldFour style={{marginTop:4, marginLeft: 8, marginBottom:24}}>VTI</AppText.TitleSemiBoldFour>
                </View>
                
                {/* message card */}
                <View style={styles.messageCard}>
                    <Image
                        source={Images.profilePic.three}
                        style={{height:40, width:40, marginRight:12}}
                    />
                    <View style={styles.messageContainer}>
                        <View style={{flexDirection:'row', alignItems:'center', marginBottom: 8, justifyContent: 'space-between'}}> 
                            <AppText.LabelSemiBoldOne>From Alex</AppText.LabelSemiBoldOne> 
                            <AppText.ParagraphThree>Oct 16 2022</AppText.ParagraphThree>
                        </View>
                        <AppText.ParagraphTwo >Hihi Emily! I heard you wanted to start investing! This is a group I've been in that is consistent and stable... would love to have you join!</AppText.ParagraphTwo>
                    </View>
                </View>
                
                {/* Investment stats */}
                <Divider.Horizontal style={styles.divider} />
                <WallusTips.orange titleText={'Not aligned with your preference'} bodyText={'This is a text that explains the reason why it does not match'} />

                <InvestmentStat portfolioFit={'Great'} expectedReturn={'3.1%'} volatility={'Medium'} typicalHold={'4Y 3M'} />
                <AppButton.SecondaryOutlineThickOne text={'Stock details'} TouchableOpacityStyle={[styles.stockDetailsButton, styles.endOfPage]} onPress={() => navigation.navigate('Stock', {stock:'tesla', dataSource:'dailyMovers'})} />
            </ScrollView>

            <AppFloatingButton.PrimaryThickDual textOne='Decline' textTwo={'Accept'} onPressOne={() => navigation.navigate('No Alex')} onPressTwo={() => navigation.navigate('Congrats')} />
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
    messageCard: {
        width:'100%',
        backgroundColor: Themes.colors.neutral_100,
        borderRadius:16,
        paddingHorizontal:12,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:24,
    },
    messageContainer: {
        flex: 1,
    },
    divider: {
        width: windowWidth,
    }
});



// Branch

// Main
// Main Branch How is it going??
