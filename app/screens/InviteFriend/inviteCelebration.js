import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";

export default function inviteCelebration({navigation, route}) {
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Image style={{width: 246.5, height: 201.5, resizeMode: 'contain'}}source={Images.walrus.cheersBackground}/>
            <View style={styles.textContainer}>
                <AppText.TitleBoldOne style={{color:Themes.colors.neutral_800, textAlign: 'center'}}>
                    Invite Sent!</AppText.TitleBoldOne>
                <AppText.LabelSemiBoldOne style={{color: Themes.colors.neutral_600, textAlign: 'center', marginTop: 16}}>
                    Your invitation has been delivered</AppText.LabelSemiBoldOne>
            </View>
            <AppButton.PrimaryThickTwo text="Home" onPress={() => navigation.navigate('Home Screen')}/>
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