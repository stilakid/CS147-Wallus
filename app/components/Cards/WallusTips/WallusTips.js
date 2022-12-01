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

WallusTips.green = () => (
    <View style={[styles.tipContainer, {backgroundColor: '#E1F8B1'}]}>
        <View style={styles.textContainer}>
            <AppText.LabelBoldOne style={{marginBottom:8}}>This is the title of the card</AppText.LabelBoldOne>
            <AppText.ParagraphTwo>Wallus will give tips on how the user should invest here.</AppText.ParagraphTwo>
            <Image source={require("../../../../assets/walrus/wise.png")} style={styles.wallus}/>
        </View>
    </View>
)

WallusTips.orange = () => (
    <View style={[styles.tipContainer, {backgroundColor: Themes.colors.tertiary_400}]}>
        <View style={styles.textContainer}>
            <AppText.LabelBoldOne style={{marginBottom:8}}>This is the title of the card</AppText.LabelBoldOne>
            <AppText.ParagraphTwo>Wallus will give tips on how the user should invest here.</AppText.ParagraphTwo>
            <Image source={require("../../../../assets/walrus/wise.png")} style={styles.wallus}/>
        </View>
    </View>
)

const styles = StyleSheet.create({
    tipContainer: {
        width:358,
        padding: 16,
        borderRadius: 16,
        overflow: 'hidden',
    },
    textContainer: {
        width: 232,
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