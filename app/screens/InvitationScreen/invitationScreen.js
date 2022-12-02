// import React from 'react';
import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, FlatList } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import Header from "../../components/Header/header";
import { BorderedList } from "../../components/BorderedList/borderedList";
import { TrendTags } from "../../components/TrendTags/TrendTags";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";

// Lucide Icons
import { ChevronLeft } from 'lucide-react-native';


const myData = [
    {
        id: 1,
        statName: 'Portfolio fit',
        toolTipText: 'Hello',
        stat: 'Great',
        statBackgroundColor: 'green'
    },
    {
        id: 1,
        statName: 'Expected return',
        toolTipText: 'Hello',
        stat: '3.1%'
    },
    {
        id: 2,
        statName: 'Volatility',
        toolTipText: 'Hello',
        stat: 'Medium'
    },
    {
        id: 3,
        statName: 'Typical Hold',
        toolTipText: 'Hello',
        stat: '4Y 3M'
    },
];






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
            <Header text="Invitation" navigation={navigation} hasDivider={false} />
            <Text>Start</Text>
            <BorderedList.InvestmentStat data={myData} data_primary_key={(item) => item.row} />
            <Text>End</Text>
            <AppFloatingButton.PrimaryThickDual textOne='Decline' textTwo={'Accept'} />

        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        height: '100%'
      },
});



// Branch

// Main
// Main Branch How is it going??
