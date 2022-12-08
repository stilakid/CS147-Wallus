import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import Header from "../../components/Header/header";
import { ScrollView } from "react-native-gesture-handler";


export default function DueDiligence({navigation, route}) {
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} text={"Due Diligence"}/>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={require('../../../assets/duedilligence.png')}
                />
                <View style={styles.text}>
                    <AppText.ParagraphFour style={styles.credit}>Investopedia / Ellen Lindner</AppText.ParagraphFour>
                    <AppText.Headline style={styles.whatis}>What Is Due Dilligence?</AppText.Headline>
                    <AppText.ParagraphTwo style={styles.definition}>Due diligence is an investigation, audit, or review performed to confirm facts or details of a matter under consideration. In the financial world, due diligence requires an examination of financial records before entering into a proposed transaction with another party.</AppText.ParagraphTwo>
                    <AppText.Headline style={styles.whatis}>Understanding Due Dilligence</AppText.Headline>
                    <AppText.ParagraphTwo style={styles.definition}>Due diligence became common practice (and a common term) in the United States with the passage of the Securities Act of 1933. With that law, securities dealers and brokers became responsible for fully disclosing material information about the instruments they were selling. Failing to disclose this information to potential investors made dealers and brokers liable for criminal prosecution.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>The writers of the act recognized that requiring full disclosure left dealers and brokers vulnerable to unfair prosecution for failing to disclose a material fact they did not possess or could not have known at the time of sale. Thus, the act included a legal defense: as long as the dealers and brokers exercised "due diligence" when investigating the companies whose equities they were selling, and fully disclosed the results, they could not be held liable for information that was not discovered during the investigation.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>Due diligence is performed by equity research analysts, fund managers, broker-dealers, individual investors, and companies that are considering acquiring other companies. Due diligence by individual investors is voluntary. However, broker-dealers are legally obligated to conduct due diligence on a security before selling it.</AppText.ParagraphTwo>
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