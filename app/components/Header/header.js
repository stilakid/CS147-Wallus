import { Themes } from "../../../assets/themes";

// Components
import { StyleSheet, View, Text, Image } from "react-native";
import { AppButton } from "../Buttons/buttons";
import { AppText } from "../CustomText/customText";
import { Divider } from "../Divider/divider";

export default function Header({hasDivider, isTabPageHeader, hasBackButton=true, text, navigation, OuterContainerStyle, InnerContainerStyle, TextStyle}) {
    let divider;
    let backButton;
    let headerText = (
        <AppText.TitleSemiBoldThree style={[styles.text, TextStyle]}>
            {text}
        </AppText.TitleSemiBoldThree>
    );
    if (hasDivider) {
        divider = <Divider.Horizontal />
    }
    if (hasBackButton) {
        backButton = <AppButton.goBack navigation={navigation} TouchableOpacityStyle={styles.goBack} />
    }
    if (isTabPageHeader) {
        headerText = (
            <AppText.TitleBoldOne style={[styles.text, TextStyle]}>
                    {text}
            </AppText.TitleBoldOne>
        )
    }

    return (
        <View style={[styles.outermostContainer, OuterContainerStyle]}>
            <View style={[styles.innerContainer, InnerContainerStyle]}>
                {backButton}
                {headerText}
            </View>
            {divider}
        </View>
    );
}

const styles = StyleSheet.create({
    outermostContainer: {
        display: 'flex',
        width: '100%',
    },
    innerContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        height: 70,
        // paddingHorizontal: 16
    },
    text: {
        color: Themes.colors.neutral_800,
        marginTop: 4
    }
});