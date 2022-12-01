import { StyleSheet, SafeAreaView, Text, View, Button } from "react-native";
import { Themes } from "../../../assets/themes"
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";

export default function DictionaryScreen({navigation, route}) {
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Image style={{width: 246.5, height: 201.5}}source={require("../../../assets/walrus/congratulationsW.png")}/>
            <View style={styles.textContainer}>
                <AppText.TitleBoldOne style={{color:Themes.colors.neutral_800, textAlign: 'center'}}>
                    Congratulations!</AppText.TitleBoldOne>
                <AppText.LabelSemiBoldOne style={{color: Themes.colors.neutral_600, textAlign: 'center', marginTop: 16}}>
                    You just joined the friendly Bananas!</AppText.LabelSemiBoldOne>
            </View>
            <AppButton.PrimaryThickTwo text="Go to investment group"/>

            {/* Buttons are not linked yet */}

            <View style={{paddingVertical:12}}>
                <AppButton.SecondaryOutlineThickTwo text="Invite more friends"/>
            </View>
            <AppButton.SecondaryOutlineThickTwo text="Home"/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
      },
    illustration: {
        width: 246.5,
        height:201.5,
    },
    textContainer: {
        marginVertical: 40,
    },

});