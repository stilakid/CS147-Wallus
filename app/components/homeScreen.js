import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../assets/themes"
import { AppText } from "./CustomText/customText";

export default function HomeScreen({navigation, route}) {


    
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <AppText.TitleBoldOne style={styles.text}>
                HOME PAGE!!!
            </AppText.TitleBoldOne>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        flex: 1,
    },
});