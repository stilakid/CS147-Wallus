// import React from 'react';
import { Images, Themes } from "../../../assets/themes"

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
import { Dimensions } from "react-native";

// Lucide Icons
import { Smile } from 'lucide-react-native';
import InvestmentDetailCard from "../../components/Cards/InvestmentDetailCard/InvestmentDetailCard";
import { GroupStats } from "../../components/BorderedList/groupBoarderedList";
import RationaleCard from "../../components/Cards/RationaleCard";
import { MemberList } from "../../components/BorderedList/MemberList";


const windowWidth = Dimensions.get('window').width;

{/* <Home color="black" size={24} />; */}
export default function CommunityScreen({navigation, route}) {

    // const {  } = route.params;

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} >
            <Header hasBackButton={false} text={"Community"} isTabPageHeader OuterContainerStyle={{marginLeft:32}}/>
                <View style={{marginTop: 40, alignItems:'center'}}>
                    <View style={styles.news}>
                        <Image
                            style={styles.image}
                            source={Images.profilePic.two}
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

                    <Divider.Horizontal style={styles.divider}/>

                    <View style={[styles.news, {marginTop: 20}]}>
                        <Image
                            style={styles.image}
                            source={Images.profilePic.one}
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

                    <Divider.Horizontal  style={styles.divider} />

                    <View style={[styles.news, {marginTop: 20}]}>
                        <Image
                            style={styles.image}
                            source={Images.profilePic.three}
                            resizeMode='contain'
                        />
                        <View style={styles.textContainer}>
                            <AppText.LabelSemiBoldOne><AppText.LabelSemiBoldOne style={{color: Themes.colors.primary_700}}>Anna</AppText.LabelSemiBoldOne> joined Crazy Potatoes</AppText.LabelSemiBoldOne>
                            <Text style={styles.investmentStyle}>S&P500 · 5hr</Text>
                            <View style={styles.rationale}>
                                <AppText.LabelSemiBoldTwo>Rationale</AppText.LabelSemiBoldTwo>
                                <AppText.ParagraphTwo style={{color:Themes.colors.neutral_600}}>Need cash </AppText.ParagraphTwo>
                            </View>
                            <View style={[styles.icons]}>
                                <View style={styles.icon}>
                                    <Smile style={{color:Themes.colors.neutral_600}}></Smile>
                                </View>
                            </View>
                        </View>
                    </View>

                    <Divider.Horizontal  style={styles.divider} />

                    <View style={[styles.news, {marginTop: 20}]}>
                        <Image
                            style={styles.image}
                            source={Images.profilePic.six}
                            resizeMode='contain'
                        />
                        <View style={styles.textContainer}>
                            <AppText.LabelSemiBoldOne><AppText.LabelSemiBoldOne style={{color: Themes.colors.primary_700}}>Justine</AppText.LabelSemiBoldOne> invested in VTI</AppText.LabelSemiBoldOne>
                            <Text style={styles.investmentStyle}>VTI · 5hr</Text>
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
        marginHorizontal:16,
    },
    image: {
        width:40,
        height:40,
    },
    scrollViewContent: {
        display: 'flex',
        alignItems: "center",
        // marginHorizontal: 16,
    },
    news: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom:24,
        paddingHorizontal:16,
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
        padding: 16,
        backgroundColor: Themes.colors.neutral_100,
        borderRadius: 16,
        marginTop: 16
    },
    icons: {
        height: 32,
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 16
    },
    icon: {
        width: 64,
        height: 32,
        backgroundColor: Themes.colors.neutral_100,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:4,
    },
    divider: {
        width:windowWidth,
    }
});