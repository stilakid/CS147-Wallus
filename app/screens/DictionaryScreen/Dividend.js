import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import Header from "../../components/Header/header";
import { ScrollView } from "react-native-gesture-handler";


export default function Dividend({navigation, route}) {
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} text={"Dividend"}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/dividend.png')}
                />
                <View style={styles.text}>
                    <AppText.ParagraphFour style={styles.credit}>Investopedia / Julie Bang</AppText.ParagraphFour>
                    <AppText.Headline style={styles.whatis}>What Is a Dividend?</AppText.Headline>
                    <AppText.ParagraphTwo style={styles.definition}>A dividend is the distribution of a company's earnings to its shareholders and is determined by the company's board of directors. Dividends are often distributed quarterly and may be paid out as cash or in the form of reinvestment in additional stock.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>The dividend yield is the dividend per share and is expressed as dividend/price as a percentage of a company's share price, such as 2.5%.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>Common shareholders of dividend-paying companies are eligible to receive a distribution as long as they own the stock before the ex-dividend date.</AppText.ParagraphTwo>
                    <AppText.Headline style={styles.whatis}>Understanding Dividends</AppText.Headline>
                    <AppText.ParagraphTwo style={styles.definition}>Dividends must be approved by the shareholders by voting rights. Although cash dividends are common, dividends can also be issued as shares of stock. Various mutual funds and exchange-traded funds (ETFs) also pay dividends.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>A dividend is a reward paid to the shareholders for their investment in a company’s equity, and it usually originates from the company's net profits. Though profits can be kept within the company as retained earnings to be used for the company’s ongoing and future business activities, a remainder can be allocated to the shareholders as a dividend.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>Companies may still make dividend payments even when they don’t make suitable profits to maintain their established track record of distributions.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>The board of directors can choose to issue dividends over various time frames and with different payout rates. Dividends can be paid at a scheduled frequency, such as monthly, quarterly, or annually. For example, Walmart Inc. (WMT) and Unilever (UL) make regular quarterly dividend payments.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>Companies can also issue non-recurring special dividends, either individually or in addition to a scheduled dividend. United Bancorp Inc. declared a 10 cents per share special dividend on Feb. 18, 2022.</AppText.ParagraphTwo>
                </View>
            </ScrollView>
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
        width: 358,
        height: 243,
        borderRadius: 10,
      }, 
      text: {
        flexDirection: 'column',
        marginLeft: 14,
        marginTop: 24,
        marginBottom: 20
      },
      credit: {
        color: Themes.colors.neutral_400
      },
      whatis: {
        marginTop: 36
      },
      definition: {
        marginTop: 14,
        color: Themes.colors.neutral_800,
        width: 348
      },

});