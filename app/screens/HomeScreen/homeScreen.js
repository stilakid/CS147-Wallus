import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Image, SectionList, FlatList } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import { SelectionOptions } from "../../components/SelectionOptions/SelectionOptions";

// Lucide Icons
import { Bell } from "lucide-react-native"
import Milestone from "../../components/Cards/Milestone";
import InvitationCard from "../../components/Cards/InvitationCard";
import React from 'react';
import Home from '../../components/SearchBar/Home'

//Investment group data
import investmentGroups from "../../../assets/stockData/investmentGroups";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({navigation, route}) {
    const bellContent = <Bell color={Themes.colors.neutral_600} size={20} />
    console.log(DATA);
    const DATA = [
        {
        title: 'My investments',
        data: investmentGroups,
        },
        // {
        // title: 'My Stocks',
        // data: ['3', '4'],
        // },
    ];

    //Datasets
    const placeholder =[
        {
            random: 'placeholder',
        }
    ];
    
    const renderCards = ({item}) => {
        const group = investmentGroups[item];
        console.log(group);

        return (
            <View style={{marginBottom:12}}>
                <InvitationCard 
                    GroupName={group.groupName} 
                    Price={"USD 27.4 total"} 
                    stock={group.companyName}
                    status={group.status}
                    memberPicURL={group.memberPicURL}
                    onPress={()=>navigation.navigate('Group Detail',{group: item})}
                />
            </View>
        )
    }
    

    const renderPlaceholder =()=> {
        return(
            <>
            <View style={styles.header}>
                <TouchableOpacity style={styles.nameCard} onPress={()=> navigation.navigate("Profile Screen")}>
                    <Image style={styles.profilePic} source={Images.profilePic.nine} resizeMode='contain'></Image>
                    <View style={styles.nameCardText}>
                        <AppText.LabelBoldOne>Emily Sanders</AppText.LabelBoldOne>
                        <AppText.LabelSemiBoldTwo style={{color: Themes.colors.neutral_500}}> @emilysndr</AppText.LabelSemiBoldTwo>
                    </View>
                </TouchableOpacity>
                <AppButton.notif navigation={navigation}/>
            </View>

                <Milestone></Milestone>

                <AppText.TitleSemiBoldFour style={{marginBottom:16}}>My investments</AppText.TitleSemiBoldFour>
                <FlatList
                    data={Object.keys(investmentGroups)}
                    renderItem={(item) => renderCards(item)}
                    keyExtractor={(item) => item}
                    scrollEnabled='false'
                /> 
            </>

        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList data={placeholder}
                renderItem={(item) => renderPlaceholder(item)}
                contentContainerStyle={styles.flatListContent}
                style={styles.flatListContainer}
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        // alignItems: "center",
    },
    flatListContainer: {
        marginHorizontal: 16
    },
    flatListContent: {
        height: '100%'
    },
    image: {
        // backgroundColor: 'red',
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },


    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 64,
        marginTop: 24
    },
    nameCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingLeft: 12,
        paddingRight: 20,
        width: 185,
        height: 64,
        borderBottomWidth: 4,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: Themes.colors.neutral_200,
        borderRadius: 999
    },
    profilePic: {
        width: 40,
        height: 40,
    },
    nameCardText:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 103,
        height: 38,
        marginLeft: 10
    },
    sectionList: {
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal:16
    },
    sectionListContent: {
        // marginHorizontal: 16,
        alignItems:'center',
    },
    sectionListTitle: {
        marginTop: 24,
        marginBottom: 16
    },
});