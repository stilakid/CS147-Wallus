// import React from 'react';
import { Themes } from "../../../assets/themes"

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

// Lucide Icons
import { ChevronLeft } from 'lucide-react-native';


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
export default function InvitationScreen({navigation, route}) {

    // const {  } = route.params;



    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} >
                <Header text="Dan's Invitation" navigation={navigation} hasDivider={false} />
                <Image
                    source={require('../../../assets/InvitationBanner.png')}
                    style={
                        styles.banner
                    }
                />

                <Divider.Horizontal />
                <WallusTips.orange titleText={'Not aligned with your preference'} bodyText={'This is a text that explains the reason why it does not match'} />

                {/* <BorderedList.InvestmentStat data={portfolioFit} data_primary_key={(item) => item.id} FlatListStyle={styles.portfolioFit} />

                <BorderedList.InvestmentStat data={investmentInfo} data_primary_key={(item) => item.id} /> */}

                <InvestmentStat portfolioFit={'Great'} expectedReturn={'3.1%'} volatility={'Medium'} typicalHold={'4Y 3M'} />
                <AppButton.SecondaryOutlineThickOne text={'Stock details'} TouchableOpacityStyle={[styles.stockDetailsButton, styles.endOfPage]} onPress={() => navigation.navigate('Stock')} />
            </ScrollView>

            <AppFloatingButton.PrimaryThickDual textOne='Decline' textTwo={'Accept'} onPressOne={() => navigation.pop(1)} onPressTwo={() => navigation.navigate('Congrats')} />
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
    }
});



// Branch

// Main
// Main Branch How is it going??
