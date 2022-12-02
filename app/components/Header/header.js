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
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <AppButton.goBack navigation={navigation} TouchableOpacityStyle={styles.goBack} />
                    <AppText.TitleSemiBoldThree style={styles.text}>
                        {text}
                    </AppText.TitleSemiBoldThree>
                </View>
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
    outerContainer: {
        display: 'flex',
        height: 70,
        justifyContent: 'center'
    },
    innerContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center'
    },
    text: {
        color: Themes.colors.neutral_800,
        marginTop: 4
    }
});