import { Themes } from "../../../assets/themes"

// Components
import { StyleSheet, SafeAreaView, Text, View, Button, SectionList } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider"
import { Navigation } from "lucide-react-native";
import {CheckBox} from "../../components/Checkbox/Checkbox"
import { SearchBar } from "react-native-screens";

import { ScrollView, Image } from "react-native";
import { AppFloatingButton } from "../../components/Buttons/floatingButtons";
import Header from "../../components/Header/header";
import { useEffect, useState } from "react";
import InvitationCard from "../../components/Cards/InvitationCard";
import { TextInput } from "react-native-gesture-handler";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function CommunityScreen({navigation, route}) {
    const [value, setValue] = useState(0)
    const [input, setInput] = useState(null)
    console.log({value});
    
    return(
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} hasDivider={false} />
            <AppText.TitleBoldOne style={{width:358, marginBottom:8}}>You are inviting...</AppText.TitleBoldOne>
            
            <View style={styles.inviteNames}>
                <AppText.LabelSemiBoldThree style={styles.name}>David</AppText.LabelSemiBoldThree>
                <AppText.LabelSemiBoldThree style={styles.name}>Jenny</AppText.LabelSemiBoldThree>
            </View>

            <View>
                <AppText.TitleSemiBoldFour style={styles.joining}>Joining investment group</AppText.TitleSemiBoldFour>
                <InvitationCard GroupName={'Brave Potatoes'} Price={"USD 27.4 total"}></InvitationCard>
            </View>

            <View>
                <AppText.TitleSemiBoldFour style={styles.invite}>Invite message</AppText.TitleSemiBoldFour>
                <TextInput
                    style={styles.input}
                    onChangeText={setInput}
                    onPressOut={() => {Keyboard.dismiss()}}
                    value={input}
                    placeholder="Write down any unlisted reasons..."
                    keyboardType="default"
                    placeholderTextColor={Themes.colors.neutral_500}
                />
            </View>

            <AppFloatingButton.PrimaryThickOne text={'Next'} onPress={()=> navigation.navigate("Send Invitation!")}/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
    },
    inviteNames: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: 358,
        height: 32,
        marginBottom: 36
    },
    name: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: 52,
        height: 32,
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden'
    },
    joining: {
        marginBottom: 12,
    },
    invite: {
        marginTop: 36
    },
    input: {
        backgroundColor: Themes.colors.neutral_100,
        borderColor: Themes.colors.neutral_200,
        borderWidth: 2,
        width: 358,
        borderRadius: 16,
        padding: 12,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        marginTop: 12
    }
});