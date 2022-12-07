import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { Themes } from "../../../../assets/themes"
import { AppText } from "../../../components/CustomText/customText";

export default function WallusTips ({titleText, bodyText}) {
    return(
        <View>
            <Text>Make sure to write either WallusTips.green or WallusTips.orange</Text>
        </View>
    );
}

WallusTips.green = ({titleText, bodyText, style}) => (
    <View style={[styles.tipContainer, style]}>
        <View style={[styles.innerContainer, {backgroundColor: '#E1F8B1'}]}>
            <View style={styles.textContainer}>
                <AppText.LabelBoldOne style={{marginBottom:8}}>{titleText}</AppText.LabelBoldOne>
                <AppText.ParagraphTwo>{bodyText}</AppText.ParagraphTwo>
                <Image source={require("../../../../assets/walrus/wise.png")} style={styles.wallus}/>
            </View>
        </View>
    </View>
)

WallusTips.orange = ({titleText, bodyText, style}) => (
    <View style={[styles.tipContainer, style]}>
        <View style={[styles.innerContainer, {backgroundColor: Themes.colors.tertiary_300}]}>
            <View style={styles.textContainer}>
                <AppText.LabelBoldOne style={{marginBottom:8}}>{titleText}</AppText.LabelBoldOne>
                <AppText.ParagraphTwo>{bodyText}</AppText.ParagraphTwo>
                <Image source={require("../../../../assets/walrus/wise.png")} style={styles.wallus}/>
            </View>
        </View>
    </View>
)

WallusTips.white = ({titleText, bodyText, style}) => (
    <View style={[styles.tipContainer, style]}>
        <View style={[styles.innerContainer, {backgroundColor: Themes.colors.neutral_100}]}>
            <View style={styles.textContainer}>
                <AppText.LabelBoldOne style={{marginBottom:8}}>{titleText}</AppText.LabelBoldOne>
                <AppText.ParagraphTwo>{bodyText}</AppText.ParagraphTwo>
                <Image source={require("../../../../assets/walrus/wise.png")} style={styles.wallus}/>
            </View>
        </View>
    </View>
)

WallusTips.bordered = ({titleText, bodyText, style}) => (
    <View style={[styles.tipContainer, {marginVertical:0}, style]}>
        <View style={[styles.innerContainer, {backgroundColor: 'white', borderRadius: 16, borderColor: Themes.colors.neutral_200, borderWidth:2}]}>
            <View style={styles.textContainer}>
                <AppText.LabelBoldOne style={{marginBottom:8}}>{titleText}</AppText.LabelBoldOne>
                <AppText.ParagraphTwo>{bodyText}</AppText.ParagraphTwo>
                <Image source={require("../../../../assets/walrus/wise.png")} style={styles.wallus}/>
            </View>
        </View>
    </View>
)


const styles = StyleSheet.create({
    tipContainer: {
        marginVertical: 24,
        width: '100%',
    },
    textContainer: {
        width: 232,
    },
    innerContainer: {
        marginHorizontal: 16,
        borderRadius: 16,
        overflow: 'hidden',
        padding: 16,
    },
    wallus: {
        width: 120,
        height:120,
        position: 'absolute',
        resizeMode: 'contain',
        left: 228.43,
        bottom: -32.94,
        transform: [{ rotate: '-8.14deg' }],
    }
});