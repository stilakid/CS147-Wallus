// import React from 'react';
import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import Header from "../../components/Header/header";
import { BorderedList } from "../../components/BorderedList/borderedList";
import { TrendTags } from "../../components/TrendTags/TrendTags";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";

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
    
    const renderItem = ({item}) => (
        <View>
            <Text>{item.name}</Text>
        </View>
    )


    
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

                <Divider/>
                <View style={[styles.wallusTips, {height: 126, width: '100%', marginHorizontal: 16, backgroundColor: 'orange'}]}></View>

                <BorderedList.InvestmentStat data={portfolioFit} data_primary_key={(item) => item.id} FlatListStyle={styles.portfolioFit} />

                <BorderedList.InvestmentStat data={investmentInfo} data_primary_key={(item) => item.id} />
                <AppButton.SecondaryOutlineThickOne text={'Stock details'} TouchableOpacityStyle={styles.stockDetailsButton} />
            </ScrollView>

            <AppFloatingButton.PrimaryThickDual textOne='Decline' textTwo={'Accept'} />
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
        // display: 'flex',
        // backgroundColor: 'red',
        // height: '100%'
    },
    scrollViewContent: {
        display: 'flex',
        // backgroundColor: 'blue',
        alignItems: "center",
        // paddingHorizontal: 16
    },
    portfolioFit: {
        marginBottom: 12,
    },
    wallusTips: {
        marginVertical: 24,
        borderRadius: 16
    },
    stockDetailsButton: {
        marginTop: 26
    },
    banner: {
        width: '100%',
        // height: 300,
        resizeMode: 'contain'
    }
});



// Branch

// Main
// Main Branch How is it going??
