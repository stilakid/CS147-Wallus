import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/themes"
import { AppText } from "./CustomText/customText";
import { Buttons } from "./Buttons/Buttons"
import { AppButton } from "./Juben/buttons";

export default function HomeScreen({navigation, route}) {
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <AppText.TitleBoldOne style={styles.text}>
                HOME PAGE!!!
                <Buttons.FullWidth48Blue text={"wallus"}>
                    text
                </Buttons.FullWidth48Blue>
            </AppText.TitleBoldOne>

            <AppButton.BlueButton>

                
            </AppButton.BlueButton>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
      },
      header: {
      },
      text: {
        fontStyle: 'italic'

        // fontFamily: 'Outfit_100Thin',
        // fontSize: 28,
      },
    ButtonContainer: {
        backgroundColor: Themes.colors.primary_700,
        borderBottom: 4,
        borderBottomColor: Themes.colors.primary_900,
        borderRadius: 32,
        position: "absolute",
        width: 358,
        height: 48,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 12,
        gap: 8,
    },
    ButtonText:{
        width: 48,      
        height: 19,
        color: "#FFFFFF",   
        order: 0,
    }
    
});