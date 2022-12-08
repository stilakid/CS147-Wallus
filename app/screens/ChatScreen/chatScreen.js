import { Themes, Images } from "../../../assets/themes"
import { StyleSheet, SafeAreaView, Text, View, Button, Image, TextInput, ScrollView } from "react-native";
import Header from "../../components/Header/header";
import AppInput from "../../components/CustomInput/customInput";
import { useForm } from "react-hook-form";
import { AppButton } from "../../components/Buttons/buttons";
import { supabase } from "../../../supabase";
import Messages from "../../components/Messages/messages";
import { useEffect, useState } from "react";


export default function ChatScreen({navigation, route}) {
    const {control, handleSubmit, resetField} = useForm('');
    useEffect(() => {
        console.log("update chat box");
    }, [])

    const onSendPressed = async (data) => {
        resetField("message");
        console.warn("Sending Message");
        console.log(data.message);

        const {error} = await supabase.from('messages').insert({ content: data.message });
        if (error) {
            console.log({error});
            console.warn({error});
            return;
        }

        // clear input message
    }



    return(
        <SafeAreaView style={styles.container}>
            <Header text="Brave Potatoes" navigation={navigation} hasDivider={true} />
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent} >
                <Messages />

                <AppInput
                    name="message"
                    placeholder={'Message'}
                    control={control}
                    rules={{required: 'Message is required'}}
                />

                <AppButton.PrimaryThickOne text={'Send'} onPress={handleSubmit(onSendPressed)} />

            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 56,
    },
    scrollView: {
        backgroundColor: Themes.colors.neutral_100,
        // backgroundColor: Themes.colors.black,
        width: '100%'
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        height: 40,
        width: 300
    },
    scrollViewContent: {
        paddingHorizontal: 16,
        alignItems: 'center',
    }
});