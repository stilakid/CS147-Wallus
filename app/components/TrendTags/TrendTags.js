import { Themes} from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity,} from "react-native";
import { AppText } from "../CustomText/customText";

export function TrendTags ({tagText}) {
    return (
        <View style={styles.tagContainer}>
             <AppText.LabelBoldTwo>{tagText}</AppText.LabelBoldTwo>
        </View>
    );
}


/******* 28px height tags *******/

TrendTags.smallGreen = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.secondary_50}]}>
        <AppText.LabelBoldTwo style={{color: Themes.colors.secondary_900}}>{tagText}
        </AppText.LabelBoldTwo>
    </View>
)

TrendTags.smallBlue = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.primary_50}]}>
        <AppText.LabelBoldTwo style={{color: Themes.colors.primary_900}}>{tagText}
        </AppText.LabelBoldTwo>
    </View>
)

TrendTags.smallOrange = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.tertiary_200}]}>
        <AppText.LabelBoldTwo style={{color: "#A43F21"}}>{tagText}
        </AppText.LabelBoldTwo>
    </View>
)

TrendTags.smallGrey = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.neutral_100}]}>
        <AppText.LabelBoldTwo style={{color: Themes.colors.neutral_600}}>{tagText}
        </AppText.LabelBoldTwo>
    </View>
)

/******* 32px height tags *******/

TrendTags.bigGreen = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.secondary_50}, {height: 32}]}>
        <AppText.LabelBoldTwo style={{color: Themes.colors.secondary_900}}>{tagText}
        </AppText.LabelBoldTwo>
    </View>
)

TrendTags.bigBlue = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.primary_50}, {height: 32}]}>
        <AppText.LabelBoldTwo style={{color: Themes.colors.primary_900}}>{tagText}
        </AppText.LabelBoldTwo>
    </View>
)

TrendTags.bigOrange = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.tertiary_200}, {height: 32}]}>
        <AppText.LabelBoldTwo style={{color: "#A43F21"}}>{tagText}
        </AppText.LabelBoldTwo>
    </View>
)

TrendTags.bigGrey = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.neutral_100},  {height: 32}]}>
        <AppText.LabelBoldTwo style={{color: Themes.colors.neutral_600}}>{tagText}
        </AppText.LabelBoldTwo>
    </View>
)

/******* 24px height tags *******/

TrendTags.xsmallGreen = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.secondary_50}, {height: 24, width: 95}, {paddingTop:2}]}>
        <AppText.LabelBoldTwo style={{color: Themes.colors.secondary_900}}>{tagText}
        </AppText.LabelBoldTwo>
    </View>
)
const styles = StyleSheet.create({
    tagContainer: {
        height: 28,
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal:6,
        borderRadius: 8,
    }
});