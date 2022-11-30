import { StyleSheet, SafeAreaView, Text, View, Button } from "react-native";
import { Themes } from "../../../assets/themes"
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";

export default function CommunityScreen({navigation, route}) {
    // const {  } = route.params;
    return(
        <SafeAreaView style={styles.container}>
            <Text>Community Screen</Text>
            <Button title="Notifs" onPress={() => navigation.navigate('Notifications')} />
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