import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, SectionList, Pressable, Keyboard, TouchableOpacity } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import {CheckBox} from "../../components/Checkbox/Checkbox"
import { SearchBar } from "react-native-screens";
import { Check } from 'lucide-react-native';


import { ScrollView, Image } from "react-native";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Header from "../../components/Header/header";
import { useEffect, useState } from "react";
import Checkbox from "../../components/Checkbox/Checkbox";

export default function JennyDavid({navigation, route}) {
    const groupID = route.params.group;
    const [value, setValue] = useState(0)
    console.log({value});

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.outermostContainer}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Group Detail', {group: groupID})} TouchableOpacityStyle={styles.goBack}>
                        <Image
                            source={require('../../../assets/back.png')}
                            style={styles.arrow}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <AppText.TitleBoldOne style={{width:358, marginBottom:24}}>Select friends to invite</AppText.TitleBoldOne>
            <View style={styles.box}>
                <View style={styles.jennybox}>
                    <AppText.LabelSemiBoldTwo style={styles.addedName}>Jenny</AppText.LabelSemiBoldTwo> 
                </View>
                <View style={styles.davidbox}>
                    <AppText.LabelSemiBoldTwo style={styles.addedName}>David</AppText.LabelSemiBoldTwo> 
                </View>
            </View>
            <ScrollView> 
                <View style={styles.people}>
                    <View style={styles.person}>
                        <View style={styles.comp}>
                            <Image
                                source={require('../../../assets/david.png')}
                                style={styles.image}
                            />
                            <View style={styles.personText}>
                                <AppText.LabelBoldOne style={styles.textName}>David Sear</AppText.LabelBoldOne> 
                                <AppText.ParagraphTwo style={styles.textGroup}>2 shared groups</AppText.ParagraphTwo> 
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Jenny', {group: groupID})} style={styles.selectedContainer}>
                      
                                <Check color={"#FFFFFF"} size={20}/>
                           
                        </TouchableOpacity>
                    </View>

                    <View style={styles.person}>
                        <View style={styles.comp}>
                            <Image
                                source={require('../../../assets/james.png')}
                                style={styles.image}
                            />
                            <View style={styles.personText}>
                                <AppText.LabelBoldOne style={styles.textName}>James Ahmed</AppText.LabelBoldOne> 
                                <AppText.ParagraphTwo style={styles.textGroup}>2 shared groups</AppText.ParagraphTwo> 
                            </View>
                        </View>
                        <AppButton.DisabledThinFive text={'Added'} />
                    </View>

                    <View style={styles.person}>
                        <View style={styles.comp}>
                            <Image
                                source={require('../../../assets/jenny.png')}
                                style={styles.image}
                            />
                            <View style={styles.personText}>
                                <AppText.LabelBoldOne style={styles.textName}>Jenny Yuan</AppText.LabelBoldOne> 
                                <AppText.ParagraphTwo style={styles.textGroup}>2 shared groups</AppText.ParagraphTwo> 
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('David', {group: groupID})} style={styles.selectedContainer}>
                          
                                <Check color={"#FFFFFF"} size={20}/>
                            
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            
            
            <AppFloatingButton.PrimaryThickOne text={'Next'} onPress={()=> navigation.navigate("confirmationJennyDavid")}/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
      },
      image: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 40,
        height: 40,
        borderRadius: 100
    },
    textName: {
        fontSize: 17,
        marginLeft: 12,
        marginBottom: 2
    },
    textGroup: {
        color: Themes.colors.neutral_500,
        marginLeft: 12
    },
    person: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        width: 358,
        height: 79,
        paddingLeft: 8,
        marginBottom: 4,
        justifyContent: 'space-between',
        paddingRight: 8
    },
    personText: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        marginLeft: 8
    },
    box: {
        alignItems: 'center',
        width: 358,
        height: 48,
        backgroundColor: Themes.colors.neutral_100,
        borderRadius: 8,
        marginBottom: 16,
        flexDirection: 'row',
        padding: 12
    },
    people: {
        flexDirection: 'column',
        alignContent: 'flex-start',
        width: 358,
        marginTop: 8
    },
    comp: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: 47
    },
    selectedContainer: {
        backgroundColor: Themes.colors.primary_700,
        height: 24,
        width: 24,
        borderRadius: 8,
        justifyContent: "center",
        alignItems:"center",
    },
    notSelectedContainer: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        borderRadius: 8,
    },
    jennybox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        borderRadius: 8,
        width: 54,
        height: 32
    },
    davidbox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        borderRadius: 8,
        width: 52,
        height: 32,
        marginLeft: 8
    },
    addedName: {
        color: Themes.colors.neutral_600,
    },
    outermostContainer: {
        display: 'flex',
        width: '100%',
    },
    innerContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        height: 70,
        paddingHorizontal: 16
    },
    text: {
        color: Themes.colors.neutral_800,
        marginTop: 4
    },
    arrow: {
        width: 24,
        height: 24
    }
});