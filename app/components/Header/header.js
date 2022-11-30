import { Themes } from "../../../assets/themes";

// Components
import { StyleSheet, View, Text, Image } from "react-native";
import { AppButton } from "../Buttons/buttons";
import { AppText } from "../CustomText/customText";
import { Divider } from "../Divider/divider";

export default function Header({hasDivider, text, navigation}) {
    let divider;
    if (hasDivider) {
        divider = <Divider/>
    }

    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <AppButton.goBack navigation={navigation}/>
                <AppText.TitleSemiBoldThree style={styles.text}>
                    {text}
                </AppText.TitleSemiBoldThree>
            </View>
            {divider}
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        display: 'flex',
        flexDirection: "column",
        width: '100%'
    },
    innerContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        width: '100%',
        height: 70,
        // backgroundColor: "black",
    },
    text: {
        color: Themes.colors.neutral_800
    }
});