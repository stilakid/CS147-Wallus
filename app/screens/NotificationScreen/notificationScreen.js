import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Themes } from "../../../assets/themes"
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"

// Lucide Icons
import { ChevronLeft } from 'lucide-react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

{/* <Home color="black" size={24} />; */}
export default function NotificaitonScreen({navigation, route}) {

    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
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