import { Themes, Images } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, Image } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import { SelectionOptions } from "../../components/SelectionOptions/SelectionOptions";

// Lucide Icons
import { Bell } from "lucide-react-native"
import Milestone from "../../components/Cards/Milestone";

export default function HomeScreen({navigation, route}) {
    const bellContent = <Bell color={Themes.colors.neutral_600} size={20} />
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.nameCard}>
                    <Image style={styles.profilePic} source={require("../../../assets/profilePic.png")} resizeMode='contain'></Image>
                    <View style={styles.nameCardText}>
                        <AppText.LabelBoldOne>Emily Sanders</AppText.LabelBoldOne>
                        <AppText.LabelSemiBoldTwo style={{color: Themes.colors.neutral_500}}> @emilysndr</AppText.LabelSemiBoldTwo>
                    </View>
                </View>
                <AppButton.notif navigation={navigation}/>
            </View>
            <Milestone></Milestone>
{/* 
            <Text>Home Screen</Text>
            <Button title="Notifs" onPress={() => navigation.navigate('Notifications')} />
            <Button title="Invitation" onPress={() => navigation.navigate('Invitation')} />
            <Button title="Stock" onPress={() => navigation.navigate('Stock')} /> */}
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 56
    },
    image: {
        // backgroundColor: 'red',
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 358,
        height: 64,
        marginTop: 24
    },
    nameCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingLeft: 12,
        paddingRight: 20,
        width: 185,
        height: 64,
        borderBottomWidth: 4,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: Themes.colors.neutral_200,
        borderRadius: 999
    },
    profilePic: {
        width: 40,
        height: 40,
    },
    nameCardText:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 103,
        height: 38,
        marginLeft: 10
    },
});