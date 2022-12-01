import { StyleSheet, SafeAreaView, Text, View, Button } from "react-native";
import { Themes } from "../../../assets/themes"
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import { Notification } from "../../components/Community & Feed/Notification";

export default function HomeScreen({navigation, route}) {
    // const {  } = route.params;
    var Picture = require("../../../assets/profilePic.png")
    return(
        <SafeAreaView style={styles.container}>
            {/* <Text>Home Screen</Text> */}
            {/* <Button title="Notifs" onPress={() => navigation.navigate('Notifications')} /> */}
            <Notification message="Dan invites you to join Friendly Bananas" investment="Investment: Apple" imageURL={Picture}></Notification>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      },
});