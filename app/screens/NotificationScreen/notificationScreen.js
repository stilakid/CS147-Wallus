import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import Header from "../../components/Header/header";

// Lucide Icons
import { ChevronLeft } from 'lucide-react-native';

{/* <Home color="black" size={24} />; */}
export default function NotificaitonScreen({navigation, route}) {

    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Header text="Notifications" navigation={navigation} hasDivider={true} />
            <Text>Notifications</Text>

            <AppButton.goBack navigation={navigation} />

            <AppButton.DisabledThickFour text="Hello"/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
      },
});

// Main