import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { color } from "react-native-reanimated";
import { Themes } from "../../../assets/themes"
import { colors } from "../../../assets/themes/colors";
import { AppButton } from "../Buttons/buttons";
import { AppText } from "../CustomText/customText";
import { TrendTags } from "../TrendTags/TrendTags";

export default function Milestone ({titleText, bodyText}) {
    return(
        <View style={[styles.tipContainer]}>
            <View style={[styles.innerContainer, {backgroundColor: colors.primary_500}]}>
                <View style={styles.header}> 
                    <View style={styles.msg}>
                        <AppText.LabelBoldThree style={{color: Themes.colors.white}}>1 YEAR AGO</AppText.LabelBoldThree>
                        <AppText.LabelBoldOne style={{color: Themes.colors.white}}>You joined Brave Potatoes!</AppText.LabelBoldOne>
                    </View>
                    <AppButton.SecondaryOutlineThinFive text='Share'></AppButton.SecondaryOutlineThinFive>
                </View>
                <View style={{width: 162, height: 22, flexDirection: 'row', marginTop:12, alignItems:'center'}}>
                    <TrendTags.xsmallGreen tagText={"Grew 12.80%"}></TrendTags.xsmallGreen>
                    <AppText.LabelBoldTwo style={{color: Themes.colors.white, marginLeft:8}}>Past Year</AppText.LabelBoldTwo>
                </View>
                <Image source={require("../../../assets/groupProfiles.png")} style={{width: 128, height: 32, marginTop: 16}}/>
                <Image source={require("../../../assets/walrus/squint.png")} style={styles.wallus}/>
            </View>
        </View>
    );
}





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
        width: 358,
        height: 157
    },
    wallus: {
        width: 120,
        height:120,
        position: 'absolute',
        resizeMode: 'contain',
        left: 245,
        bottom: -30,
        transform: [{ rotateY: '180deg' }, { rotate: '11.05deg' }],
    },
    header: {
        width: 326,
        height: 39,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',

    },
    msg: {
        alignItems: 'flex-start',
        width: 261,
        height: 39
    }
});