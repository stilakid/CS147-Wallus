import { Themes} from "../../../assets/themes"

import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity,} from "react-native";
import { AppText } from "../CustomText/customText";

export function SelectionOptions ({text}) {
    return (
        <View style={styles.tagContainer}>
             <AppText.LabelSemiBoldTwo>{text}</AppText.LabelSemiBoldTwo>
        </View>
    );
}

/*****28px selection options******/

SelectionOptions.border_Unselected_28px = ({text}) => (
    <View style={[styles.container, styles.borderContainer]}>
        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_600}}>{text}</AppText.LabelSemiBoldTwo>
    </View>
)

SelectionOptions.noBorder_Unselected_28px = ({text}) => (
    <View style={styles.container}>
        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_600}}>{text}</AppText.LabelSemiBoldTwo>
    </View>
)

SelectionOptions.selected_28px = ({text}) => (
    <View style={[styles.container, styles.filledContainer]}>
        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.primary_900}}>{text}</AppText.LabelSemiBoldTwo>
    </View>
)

/*****32px selection options******/

SelectionOptions.border_Unselected_32px = ({text}) => (
    <View style={[styles.container, styles.borderContainer, {height: 32}]}>
        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_600}}>{text}</AppText.LabelSemiBoldTwo>
    </View>
)

SelectionOptions.noBorder_Unselected_32px = ({text}) => (
    <View style={[styles.container, styles.borderContainer, {height: 32}]}>
        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.neutral_600}}>{text}</AppText.LabelSemiBoldTwo>
    </View>
)

SelectionOptions.selected_32px = ({text}) => (
    <View style={[styles.container, styles.filledContainer, {height: 32}]}>
        <AppText.LabelSemiBoldTwo style={{color:Themes.colors.primary_900}}>{text}</AppText.LabelSemiBoldTwo>
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 28,
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal:6,
        borderRadius: 8,
    },
    borderContainer: {
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
    },
    filledContainer: {
        backgroundColor: Themes.colors.primary_50,
    }
});
