// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, Keyboard, Touchable} from "react-native";
import { AppText } from "../../components/CustomText/customText";
import Header from "../../components/Header/header";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";

export default function StartingPreferenceScreen ({navigation, route}){
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
                <TouchableOpacity onClick={() => navigation.navigate('Notifications')}>
                    <View style={styles.group}>
                        <AppText.ParagraphTwo style={styles.name}>Low</AppText.ParagraphTwo>
                        <Image
                            source={require('../../../assets/drop.png')}
                            style={styles.drop}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <AppFloatingButton.PrimaryThickOne text={'Continue'} onPress={() => navigation.navigate('Investment Goals Screen')} />
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        gap: 40,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: Themes.colors.neutral_200,
        borderRadius: 16,
        width: 358,
        height: 48
    },
    name: {
        color: Themes.colors.neutral_800,
    },
    drop: {
        width: 24,
        height:24,
        marginRight: 20
    }
})