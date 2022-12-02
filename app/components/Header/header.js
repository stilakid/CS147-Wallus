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
        <View style={styles.outermostContainer}>
            <View style={styles.innerContainer}>
                <AppButton.goBack navigation={navigation} TouchableOpacityStyle={styles.goBack} />
                <AppText.TitleSemiBoldThree style={styles.text}>
                    {text}
                </AppText.TitleSemiBoldThree>
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
        paddingHorizontal: 16
    },
    text: {
        color: Themes.colors.neutral_800,
        marginTop: 4
    }
});