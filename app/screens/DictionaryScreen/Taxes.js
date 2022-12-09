import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import Header from "../../components/Header/header";
import { ScrollView } from "react-native-gesture-handler";


export default function Taxes({navigation, route}) {
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} text={"Taxes"}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/taxes.png')}
                />
                <View style={styles.text}>
                    <AppText.ParagraphFour style={styles.credit}>Investopedia / Joules Garcia</AppText.ParagraphFour>
                    <AppText.Headline style={styles.whatis}>What Are Taxes?</AppText.Headline>
                    <AppText.ParagraphTwo style={styles.definition}>Taxes are mandatory contributions levied on individuals or corporations by a government entity—whether local, regional, or national. Tax revenues finance government activities, including public works and services such as roads and schools, or programs such as Social Security and Medicare.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>In economics, taxes fall on whoever pays the burden of the tax, whether this is the entity being taxed, such as a business, or the end consumers of the business’s goods. From an accounting perspective, there are various taxes to consider, including payroll taxes, federal and state income taxes, and sales taxes.</AppText.ParagraphTwo>
                    <AppText.Headline style={styles.whatis}>Understanding Taxes</AppText.Headline>
                    <AppText.ParagraphTwo style={styles.definition}>To help fund public works and services—and to build and maintain the infrastructure used in a country—a government usually taxes its individual and corporate residents. The tax collected is used for the betterment of the economy and all who are living in it.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>In the United States and many other countries in the world, income taxes are applied to some form of money received by a taxpayer. The money could be income earned from salary, capital gains from investment appreciation, dividends or interest received as additional income, payments made for goods and services, and so on.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>Tax revenues are used for public services and the operation of the government, as well as for Social Security and Medicare. As the large baby boomer generation has aged, Social Security and Medicare have claimed increasingly high proportions of the total federal expenditure of tax revenue. Throughout U.S. history, tax policy has been a consistent source of political debate.</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>A tax requires a percentage of the taxpayer’s earnings or money to be taken and remitted to the government. Payment of taxes at rates levied by the government is compulsory, and tax evasion—the deliberate failure to pay one’s full tax liabilities—is punishable by law. (On the other hand, tax avoidance—actions taken to lessen your tax liability and maximize after-tax income—is perfectly legal.)</AppText.ParagraphTwo>
                    <AppText.ParagraphTwo style={styles.definition}>Most governments use an agency or department to collect taxes. In the United States, this function is performed federally by the Internal Revenue Service (IRS).</AppText.ParagraphTwo>
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