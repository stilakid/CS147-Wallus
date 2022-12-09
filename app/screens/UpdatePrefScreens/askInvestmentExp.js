// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, Keyboard, Touchable} from "react-native";
import { AppText } from "../../components/CustomText/customText";
import Header from "../../components/Header/header";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";

export default function ExpandedPreferencesScreen ({navigation, route}){
    const [value, setValue] = useState(0)
    const [input, setInput] = useState(null)
    console.log('Value is',{value});
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleSemiBoldThree style={styles.title}>Preference Settings</AppText.TitleSemiBoldThree>
            <AppText.ParagraphTwo style={styles.para}>The default parameters are recommended by Wallus based on your investment experience. You are able to change them </AppText.ParagraphTwo>
            <AppText.ParagraphTwo style={styles.para2}>  now or later in your profile. </AppText.ParagraphTwo>
            
            
            <View style={styles.combined}>
                <AppText.LabelSemiBoldThree style={styles.risk}>Risk Tolerance</AppText.LabelSemiBoldThree>
                <View style={styles.group}>
                    <TouchableOpacity style={styles.arrow} onClick={() => navigation.navigate('Notifications')}>
                        <Image
                            source={require('../../../assets/up.png')}
                            style={styles.up}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onClick={() => navigation.navigate('Notifications')}>
                    <View style={styles.low}>
                        <AppText.ParagraphTwo style={styles.name}>Low</AppText.ParagraphTwo>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onClick={() => navigation.navigate('Notifications')}>
                    <View style={styles.medium}>
                        <AppText.ParagraphTwo style={styles.name}>Medium</AppText.ParagraphTwo>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onClick={() => navigation.navigate('Notifications')}>
                    <View style={styles.high}>
                        <AppText.ParagraphTwo style={styles.name}>High</AppText.ParagraphTwo>  
                    </View>
                </TouchableOpacity>
                </View>
            </View>

            <AppFloatingButton.PrimaryThickOne text={'Continue'} onPress={()=> navigation.navigate("Investment Goals Screen")}/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        height: '100%',
    },
    input: {
        alignItems: 'center',
        width: 358,
        height:48,
        backgroundColor: '#FFFFFF',
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
        borderRadius: 16,
        padding: 12,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        textAlign: 'center',
        color: Themes.colors.neutral_800,
    },
    title: {
        width: 358,
        height: 24,
        textAlign: 'center',
        color: Themes.colors.neutral_800,
        marginBottom: 40,
    },
    para: {
        width: 313,
        height: 72,
        textAlign: 'center',
        color: Themes.colors.neutral_800,
    },
    para2: {
        width: 313,
        height: 72,
        textAlign: 'center',
        marginBottom: 0,
        color: Themes.colors.neutral_800,
    },
    combined: {
        flexDirection: 'column',
        alignItems: 'left',
        gap: 10,
        width: 358,
        height: 66
    },
    risk: {
        width: 345,
        height: 20,
        color: Themes.colors.neutral_800,
    },
    group: {
        flexDirection: 'column',
        gap: 40,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        borderRadius: 16,
        width: 358,
        height: 192,
        alignItems: 'center',
    },
    name: {
        color: Themes.colors.neutral_800,
        marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row'
    },
    up: {
        width: 24,
        height:24
    },
    arrow: {
        flexDirection: 'row',
        width: 358,
        height: 48,
        justifyContent: 'flex-end',
        paddingRight: 24,
        paddingTop: 12
    },
    low: {
        flexDirection: 'row',
        width: 358,
        height: 48,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
    },
    medium: {
        flexDirection: 'row',
        width: 358,
        height: 48,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: Themes.colors.neutral_200,
    }, 
    high: {
        width: 358
    }
})