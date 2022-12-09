import { Themes, Images } from "../../../assets/themes"
import { StyleSheet, SafeAreaView, Text, View, Button, Image, TextInput, ScrollView } from "react-native";
import Header from "../../components/Header/header";
import AppInput from "../../components/CustomInput/customInput";
import { useForm } from "react-hook-form";
import { AppButton } from "../../components/Buttons/buttons";
import { supabase } from "../../../supabase";
import Messages from "../../components/Messages/messages";
import { useEffect, useState } from "react";

// TODO: Right now, it is possible to send empty messages if you type and delete everythiing before pressing the send button.


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
                <View style={styles.messagesContainer}>
                    <Messages />
                </View>
            </ScrollView>

            <View style={ styles.textControlsContainer } >
                <AppInput
                    name="message"
                    placeholder={'Message'}
                    control={control}
                    rules={{required: ''}}
                    ContainerStyle={styles.messageInput}
                />
                <AppButton.sendText onPress={handleSubmit(onSendPressed)} TouchableOpacityStyle={styles.sendTextButton} />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 56,
        height: '100%',
        width: '100%'
    },
    scrollView: {
        backgroundColor: Themes.colors.neutral_100,
        // backgroundColor: Themes.colors.black,
        width: '100%',
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
        height: '100%',
    },
    textControlsContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    messageInput: {
        flex: 1
    },
    sendTextButton: {
        marginLeft: 8
    },
    messagesContainer: {
        flex:1,
        width: '100%',
        justifyContent: 'flex-end'
    }
});