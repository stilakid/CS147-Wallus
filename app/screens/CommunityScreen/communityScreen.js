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
import { Smile } from 'lucide-react-native';
import InvestmentDetailCard from "../../components/Cards/InvestmentDetailCard/InvestmentDetailCard";
import { GroupStats } from "../../components/BorderedList/groupBoarderedList";
import RationaleCard from "../../components/Cards/RationaleCard";
import { MemberList } from "../../components/BorderedList/MemberList";




{/* <Home color="black" size={24} />; */}
export default function CommunityScreen({navigation, route}) {

    // const {  } = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} >
            <Header hasBackButton={false} text={"Community"} isTabPageHeader />
                <View style={{marginTop: 40}}>
                    <View style={styles.news}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/profilePic.png')}
                            resizeMode='contain'
                        />
                        <View style={styles.textContainer}>
                            <AppText.LabelSemiBoldOne><AppText.LabelSemiBoldOne style={{color: Themes.colors.primary_700}}>Dan</AppText.LabelSemiBoldOne> just joined Microhard!</AppText.LabelSemiBoldOne>
                            <Text style={styles.investmentStyle}>Microsoft · 2hr</Text>
                            <View style={styles.rationale}>
                                <AppText.LabelSemiBoldTwo>Rationale</AppText.LabelSemiBoldTwo>
                                <AppText.ParagraphTwo style={{color:Themes.colors.neutral_600}}>I wanted to diversify my portfolio! </AppText.ParagraphTwo>
                            </View>
                            <View style={styles.icons}>
                                <View style={styles.icon}>
                                    <AppText.LabelBoldTwo>❤ 10</AppText.LabelBoldTwo>
                                </View>
                                <View style={styles.icon}>
                                    <AppText.LabelBoldTwo>👍 8</AppText.LabelBoldTwo>
                                </View>
                                <View style={styles.icon}>
                                    <AppText.LabelBoldTwo>👏 20</AppText.LabelBoldTwo>
                                </View>
                                <View style={styles.icon}>
                                    <Smile style={{color:Themes.colors.neutral_600}}></Smile>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Divider.Horizontal />

                    <View style={[styles.news, {marginTop: 20}]}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/profilePic.png')}
                            resizeMode='contain'
                        />
                        <View style={styles.textContainer}>
                            <AppText.LabelSemiBoldOne><AppText.LabelSemiBoldOne style={{color: Themes.colors.primary_700}}>Cindy</AppText.LabelSemiBoldOne> sold her Paypal Stock</AppText.LabelSemiBoldOne>
                            <Text style={styles.investmentStyle}>Paypal · 5hr</Text>
                            <View style={styles.rationale}>
                                <AppText.LabelSemiBoldTwo>Rationale</AppText.LabelSemiBoldTwo>
                                <AppText.ParagraphTwo style={{color:Themes.colors.neutral_600}}>Not aligned with investment goals </AppText.ParagraphTwo>
                            </View>
                            <View style={[styles.icons, {width: 123}]}>
                                <View style={styles.icon}>
                                    <AppText.LabelBoldTwo>👏 13</AppText.LabelBoldTwo>
                                </View>
                                <View style={styles.icon}>
                                    <Smile style={{color:Themes.colors.neutral_600}}></Smile>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Divider.Horizontal />

                    <View style={[styles.news, {marginTop: 20}]}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/profilePic.png')}
                            resizeMode='contain'
                        />
                        <View style={styles.textContainer}>
                            <AppText.LabelSemiBoldOne><AppText.LabelSemiBoldOne style={{color: Themes.colors.primary_700}}>Cindy</AppText.LabelSemiBoldOne> sold her Paypal Stock</AppText.LabelSemiBoldOne>
                            <Text style={styles.investmentStyle}>Paypal · 5hr</Text>
                            <View style={styles.rationale}>
                                <AppText.LabelSemiBoldTwo>Rationale</AppText.LabelSemiBoldTwo>
                                <AppText.ParagraphTwo style={{color:Themes.colors.neutral_600}}>Need cash </AppText.ParagraphTwo>
                            </View>
                            <View style={[styles.icons, {width: 48}]}>
                                <View style={styles.icon}>
                                    <Smile style={{color:Themes.colors.neutral_600}}></Smile>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Divider.Horizontal />

                    <View style={[styles.news, {marginTop: 20}]}>
                        <Image
                            style={styles.image}
                            source={require('../../../assets/profilePic.png')}
                            resizeMode='contain'
                        />
                        <View style={styles.textContainer}>
                            <AppText.LabelSemiBoldOne><AppText.LabelSemiBoldOne style={{color: Themes.colors.primary_700}}>Cindy</AppText.LabelSemiBoldOne> sold her Paypal Stock</AppText.LabelSemiBoldOne>
                            <Text style={styles.investmentStyle}>Paypal · 5hr</Text>
                            <View style={styles.rationale}>
                                <AppText.LabelSemiBoldTwo>Rationale</AppText.LabelSemiBoldTwo>
                                <AppText.ParagraphTwo style={{color:Themes.colors.neutral_600}}>I wanted to diversify my portfolio!</AppText.ParagraphTwo>
                            </View>
                            <View style={[styles.icons, {width: 123}]}>
                                <View style={styles.icon}>
                                    <AppText.LabelBoldTwo>👏 13</AppText.LabelBoldTwo>
                                </View>
                                <View style={styles.icon}>
                                    <Smile style={{color:Themes.colors.neutral_600}}></Smile>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>

    
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        height: '100%'
    },
    scrollView: {
        width: '100%',
    },
    scrollViewContent: {
        display: 'flex',
        // alignItems: "center",
        paddingHorizontal: 16
    },
    news: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 358,
        height: 200,
    },
    investmentStyle:{
        color: Themes.colors.neutral_500,
        marginTop: 4
    },
    textContainer: {
        marginLeft:12,
        marginRight:16,
        flex: 1
    },
    rationale: {
        alignItems: 'flex-start',
        padding: 12,
        width: 306,
        height: 70,
        backgroundColor: Themes.colors.neutral_100,
        borderRadius: 16,
        marginTop: 16
    },
    icons: {
        width: 256,
        height: 32,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 16
    },
    icon: {
        width: 63,
        height: 32,
        backgroundColor: Themes.colors.neutral_100,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
    }
});