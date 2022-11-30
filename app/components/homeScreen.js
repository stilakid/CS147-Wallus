import { StyleSheet, SafeAreaView, Text, View, Button, TouchableOpacity, onPress } from "react-native";
import { Themes} from "../../assets/themes"
import { AppText } from "./CustomText/customText";
import { Buttons } from "./Buttons/Buttons"

export default function HomeScreen({navigation, route}) {


    
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <AppText.LabelFour style={styles.text}>
                HOME PAGE!!!
            </AppText.LabelFour>

            <Buttons.FullWidth48Blue>
                text
            </Buttons.FullWidth48Blue>

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
        fontStyle: Themes.typography.title_1.font_style,
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
        // left: 24,
        // top: 24,
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