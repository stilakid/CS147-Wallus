import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/themes"
import { AppText } from "./CustomText/customText";

export default function HomeScreen({navigation, route}) {
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <AppText.LabelFour style={styles.text}>
                HOME PAGE!!!
            </AppText.LabelFour>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        
        flex: 1,
      },
      header: {
      },
      text: {
        fontStyle: Themes.typography.title_1.font_style,
        fontStyle: 'italic'

        // fontFamily: 'Outfit_100Thin',
        // fontSize: 28,
      }
});