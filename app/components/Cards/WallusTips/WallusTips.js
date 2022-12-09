import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { Themes, Images } from "../../../../assets/themes"
import { AppText } from "../../../components/CustomText/customText";

export default function WallusTips ({titleText, bodyText}) {
    return(
        <View>
            <Text>Make sure to write either WallusTips.green or WallusTips.orange</Text>
        </View>
    );
}

WallusTips.green = ({titleText, bodyText, style}) => (
    <View style={[styles.container, {backgroundColor: Themes.colors.secondary_50}, style]}>
        <View style={styles.textContainer}>
            <AppText.LabelBoldOne style={{marginBottom:8}}>{titleText}</AppText.LabelBoldOne>
            <AppText.ParagraphTwo>{bodyText}</AppText.ParagraphTwo>
        </View>
        <Image source={Images.walrus.wise} style={styles.wallus}/>
    </View>
)

WallusTips.orange = ({titleText, bodyText, style}) => (
    <View style={[styles.container, {backgroundColor: Themes.colors.tertiary_300}, style]}>
        <View style={styles.textContainer}>
            <AppText.LabelBoldOne style={{marginBottom:8}}>{titleText}</AppText.LabelBoldOne>
            <AppText.ParagraphTwo>{bodyText}</AppText.ParagraphTwo>
        </View>
        <Image source={Images.walrus.wise} style={styles.wallus}/>
    </View>
)

WallusTips.white = ({titleText, bodyText, style}) => (
    <View style={[styles.container, {backgroundColor: Themes.colors.neutral_100}, style]}>
        <View style={styles.textContainer}>
            <AppText.LabelBoldOne style={{marginBottom:8}}>{titleText}</AppText.LabelBoldOne>
            <AppText.ParagraphTwo>{bodyText}</AppText.ParagraphTwo>
        </View>
        <Image source={Images.walrus.wise} style={styles.wallus}/>
    </View>
)

WallusTips.bordered = ({titleText, bodyText, style}) => (
    <View style={[styles.container, {backgroundColor: Themes.colors.white, borderRadius: 16, borderColor: Themes.colors.neutral_200, borderWidth:2}, style]}>
        <View style={styles.textContainer}>
            <AppText.LabelBoldOne style={{marginBottom:8}}>{titleText}</AppText.LabelBoldOne>
            <AppText.ParagraphTwo>{bodyText}</AppText.ParagraphTwo>
        </View>
        <Image source={Images.walrus.wise} style={styles.wallus}/>
    </View>
)


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 16,
        overflow: 'hidden',
        padding: 16,
        marginVertical: 24,
        width: '100%',
        minHeight: 110
    },
    textContainer: {
        width: '80%',
    },
    wallus: {
        width: 120,
        height:120,
        position: 'absolute',
        resizeMode: 'contain',
        right: -10,
        bottom: -20,
        transform: [{ rotate: '-8.14deg' }],
    }
});