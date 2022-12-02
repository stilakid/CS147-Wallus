import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import { SelectionOptions } from "../../components/SelectionOptions/SelectionOptions";

export default function HomeScreen({navigation, route}) {
    // const {  } = route.params;
    const image = ''
    return(
        <SafeAreaView style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Notifs" onPress={() => navigation.navigate('Notifications')} />
            <Button title="Invitation" onPress={() => navigation.navigate('Invitation')} />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
    },
    image: {
        // backgroundColor: 'red',
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
});