import { Themes} from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity,} from "react-native";
import { AppText } from "../CustomText/customText";

export function TrendTags ({tagText}) {
    return (
        <View style={styles.tagContainer}>
             <AppText.LabelSemiBoldTwo>{tagText}</AppText.LabelSemiBoldTwo>
        </View>
    );
}

/******* 28px height tags *******/

TrendTags.smallGreen = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.secondary_50}]}>
        <AppText.LabelSemiBoldTwo style={{color: Themes.colors.secondary_900}}>{tagText}
        </AppText.LabelSemiBoldTwo>
    </View>
)

TrendTags.smallBlue = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.primary_50}]}>
        <AppText.LabelSemiBoldTwo style={{color: Themes.colors.primary_900}}>{tagText}
        </AppText.LabelSemiBoldTwo>
    </View>
)

TrendTags.smallOrange = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.tertiary_200}]}>
        <AppText.LabelSemiBoldTwo style={{color: "#A43F21"}}>{tagText}
        </AppText.LabelSemiBoldTwo>
    </View>
)

TrendTags.smallGrey = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.neutral_100}]}>
        <AppText.LabelSemiBoldTwo style={{color: Themes.colors.neutral_600}}>{tagText}
        </AppText.LabelSemiBoldTwo>
    </View>
)

/******* 32px height tags *******/

TrendTags.bigGreen = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.secondary_50}, {height: 32}]}>
        <AppText.LabelSemiBoldTwo style={{color: Themes.colors.secondary_900}}>{tagText}
        </AppText.LabelSemiBoldTwo>
    </View>
)

TrendTags.bigBlue = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.primary_50}, {height: 32}]}>
        <AppText.LabelSemiBoldTwo style={{color: Themes.colors.primary_900}}>{tagText}
        </AppText.LabelSemiBoldTwo>
    </View>
)

TrendTags.bigOrange = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.tertiary_200}, {height: 32}]}>
        <AppText.LabelSemiBoldTwo style={{color: "#A43F21"}}>{tagText}
        </AppText.LabelSemiBoldTwo>
    </View>
)

TrendTags.bigGrey = ({tagText}) => (
    <View style={[styles.tagContainer, {backgroundColor: Themes.colors.neutral_100},  {height: 32}]}>
        <AppText.LabelSemiBoldTwo style={{color: Themes.colors.neutral_600}}>{tagText}
        </AppText.LabelSemiBoldTwo>
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