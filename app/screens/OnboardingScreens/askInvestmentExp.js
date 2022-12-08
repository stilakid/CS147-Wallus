// import React from 'react';
import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Image, Keyboard, Touchable} from "react-native";
import { AppText } from "../../components/CustomText/customText";
import Header from "../../components/Header/header";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AskInvestmentExpScreen ({navigation, route}){
    const [value, setValue] = useState(0)
    const [input, setInput] = useState(null)
    console.log('Value is',{value});
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleSemiBoldThree style={styles.title}>How much investment</AppText.TitleSemiBoldThree>
            <AppText.TitleSemiBoldThree style={styles.title2}>experience do you have?</AppText.TitleSemiBoldThree>
            <AppText.ParagraphTwo style={styles.para}>Based on your investment experience, we will either provide default preference setting or allow you to set your own preference. </AppText.ParagraphTwo>
            <View style={styles.options}>
                <TouchableOpacity onClick={() => navigation.navigate('Notifications')}>
                    <View style={styles.group}>
                        <AppText.LabelSemiBoldOne style={styles.name}>None</AppText.LabelSemiBoldOne>
                    <Image
                            source={require('../../../assets/arrow.png')}
                            style={styles.arrow}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onClick={() => navigation.navigate('Notifications')}>
                    <View style={styles.group}>
                        <AppText.LabelSemiBoldOne style={styles.name}>Not much</AppText.LabelSemiBoldOne>
                        <Image
                            source={require('../../../assets/arrow.png')}
                            style={styles.arrow}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onClick={() => navigation.navigate('Notifications')}>
                    <View style={styles.group}>
                        <AppText.LabelSemiBoldOne style={styles.name}>I know what I'm doing</AppText.LabelSemiBoldOne>
                        <Image
                            source={require('../../../assets/arrow.png')}
                            style={styles.arrow}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onClick={() => navigation.navigate('Notifications')}>
                    <View style={styles.group}>
                        <AppText.LabelSemiBoldOne style={styles.name}>I'm an expert</AppText.LabelSemiBoldOne>
                        <Image
                            source={require('../../../assets/arrow.png')}
                            style={styles.arrow}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            
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
    title2: {
        width: 358,
        height: 24,
        textAlign: 'center',
        marginBottom: 40,
        color: Themes.colors.neutral_800,
    },
    title: {
        width: 358,
        height: 24,
        textAlign: 'center',
        color: Themes.colors.neutral_800,
    },
    para: {
        width: 313,
        height: 72,
        textAlign: 'center',
        marginBottom: 40,
        color: Themes.colors.neutral_800,
    },
    options: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 15,
        width: 350,
        height: 197
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4,
        width: 350,
        height: 38,
        marginBottom: 10
    },
    name: {
        color: Themes.colors.neutral_800,
    },
    arrow: {
        width: 24,
        height: 24
    }
})