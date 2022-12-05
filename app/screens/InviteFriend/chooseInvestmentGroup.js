import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, SectionList } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";

import { ScrollView, Image } from "react-native";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Header from "../../components/Header/header";
import { useState } from "react";
import InvitationCard from "../../components/Cards/InvitationCard";


export default function CommunityScreen({navigation, route}) {
    // const {  } = route.params;
    const [value, setValue] = useState(0)
    console.log({value});

    const DATA = [
        {
        title: 'Index Funds',
        data: ['1', '2'],
        },
        {
        title: 'Stocks',
        data: ['3', '4'],
        },
    ];
    
    const renderCards = ({item}) => {
        return (
            <View style={{marginVertical:12}}>
                <InvitationCard GroupName={'Brave Potatoes'} Price={"USD 27.4 total"}></InvitationCard>
            </View>
        )
    }
    
    const renderSectionTitle = ({ section: { title } }) => {
        return (
            <View style={styles.sectionListTitle}>
                <AppText.TitleSemiBoldFour>{title}</AppText.TitleSemiBoldFour>
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleBoldOne style={{width:358, marginBottom:24}}>Choose investment group</AppText.TitleBoldOne>
            <AppButton.SecondaryOutlineThickOne text={"Create new investment group"} onPress={()=> navigation.navigate("Buy Confirmation")}/>

            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index} /* unique key for each item */
                renderItem={renderCards } /* render each item as a MenuItem component with the given name */
                renderSectionHeader={renderSectionTitle}
                stickySectionHeadersEnabled={false}
            />

            <AppFloatingButton.PrimaryThickOne text={'Next'} onPress={()=> navigation.navigate("Buy Confirmation")}/>
            
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
      },
    borderedContainer: {
        borderRadius: 16,
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
    },
    sectionListTitle: {
        marginTop: 24
    }
});