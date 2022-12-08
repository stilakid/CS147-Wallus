import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, SectionList } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import {CheckBox} from "../../components/Checkbox/Checkbox"
import { SearchBar } from "react-native-screens";

import { ScrollView, Image } from "react-native";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Header from "../../components/Header/header";
import { useEffect, useState } from "react";
import Checkbox from "../../components/Checkbox/Checkbox";

export default function SelectFriends({navigation, route}) {
    const [value, setValue] = useState(0)
    console.log({value});
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData("https://randomuser.me/api/?results=20")
    }, []);

    useEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: "Search",
            }
        })
    }, [navigation]);

    const fetchData = async (url) => {
        try {
            const resposnse = await fetch(url);
            const json = await resposnse.json();
            setData(json.results);
            setFilteredData(json.results);
            console.log(json.results);
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleBoldOne style={{width:358, marginBottom:24}}>Select friends to invite</AppText.TitleBoldOne>
            <AppText.ParagraphTwo style={styles.searchBar}>Search your freind's name</AppText.ParagraphTwo>
            <ScrollView> 
                {
                filteredData.map((item, index) => {
                    return (
                        <View key={index} style={styles.rowItem}>
                            <View style={styles.person}>
                                <Image
                                    source={{url: item.picture.large}}
                                    style={styles.image}
                                />
                                <View style={styles.personText}>
                                    <AppText.LabelBoldOne style={styles.textName}>{item.name.first}{item.name.last}</AppText.LabelBoldOne> 
                                    <AppText.ParagraphTwo style={styles.textGroup}>2 shared groups</AppText.ParagraphTwo> 
                                </View>
                            </View>
                            <Checkbox></Checkbox>
                        </View>
                    )
                })
                }
            </ScrollView>
            
            
            <AppFloatingButton.PrimaryThickOne text={'Next'} onPress={()=> navigation.navigate("Invite Confirmation")}/>
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
    },
    itemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    }, image: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 40,
        height: 40,
        borderRadius: 100
    },
    textName: {
        fontSize: 17,
        marginLeft: 12,
    },
    textGroup: {
        color: Themes.colors.neutral_500,
        marginLeft: 12
    },
    rowItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        width: 358,
        height: 79,
    },
    person: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
        width: 261,
        height: 47
    },
    personText: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        width: 209,
        height: 47
    },
    searchBar: {
        color: Themes.colors.neutral_600,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 12,
        gap: 10,
        width: 358,
        height: 48,
        backgroundColor: '#F9FAFB',
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderRadius: 20,
        marginBottom: 12
    }
});