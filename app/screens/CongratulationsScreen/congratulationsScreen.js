import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import joiningGroup from "../../../assets/stockData/joiningGroup";

export default function CongratsScreen({navigation, route}) {
    // const {  } = route.params;
    console.log(Object.keys(joiningGroup)[2]);
    return(
        <SafeAreaView style={styles.container}>
            <Image style={{width: 246.5, height: 201.5, resizeMode: 'contain'}}source={Images.walrus.cheersBackground}/>
            <View style={styles.textContainer}>
                <AppText.TitleBoldOne style={{color:Themes.colors.neutral_800, textAlign: 'center'}}>
                    Congratulations!</AppText.TitleBoldOne>
                <AppText.LabelSemiBoldOne style={{color: Themes.colors.neutral_600, textAlign: 'center', marginTop: 16}}>
                    You just joined the friendly Bananas!</AppText.LabelSemiBoldOne>
            </View>
            <AppButton.PrimaryThickTwo text="Go to investment group" onPress={()=>navigation.navigate("Group Detail", {group: Object.keys(joiningGroup)[2]})}/>

            {/* Buttons are not linked yet */}

            <View style={{paddingVertical:12}}>
                <AppButton.SecondaryOutlineThickTwo text="Home" onPress={() => {navigation.popToTop()}} /> 
            </View>
            
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