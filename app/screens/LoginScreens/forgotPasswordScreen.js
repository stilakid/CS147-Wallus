import { Themes, Images } from "../../../assets/themes";
import { useState } from "react";

// Components
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import AppInput from "../../components/CustomInput/customInput";
import { AppButton } from "../../components/Buttons/buttons";
import { AppText } from "../../components/CustomText/customText";
import { SocialSignInButtons } from "../../components/Buttons/socialSignInButtons";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/header";


export default function ForgotPasswordScreen({navigation, route}) {
    // const [username, setUsername] = useState('');

    const {control, handleSubmit} = useForm('');

    const onSendPressed = (data) => {
        console.warn(data);
        console.warn("onSendPressed");
    }
    
    const onSignInPressed = () => {
        navigation.navigate('Login Screen');
    }


    return (
        <SafeAreaView style = {styles.container} showVerticalScrollIndicator={false} >
            <Header navigation={navigation} style={{width:'100%'}}/>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
            <AppText.TitleBoldOne style={{marginTop:80, width:'100%'}}>Reset your password</AppText.TitleBoldOne>
            
            <AppInput
                name="username"
                control={control}
                placeholder={'Username'}
                rules={{
                    required: 'Username is required'
                }}
                ContainerStyle={styles.inputBox}
            /> 

            <AppButton.PrimaryThickOne
                text={'Send'}
                onPress={handleSubmit(onSendPressed)}
            />
            <View style={{marginBottom:12}}/>
            {/* <AppButton.SecondaryOutlineThickOne
                text={'Back to Sign In'}
                onPress={onSignInPressed}
            /> */}

            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    scrollContent: {
        display: 'flex',
        alignItems: 'center',
    },
    scrollContainer: {
        marginHorizontal: 16
    },
    inputBox: {
        width: '100%',
        marginVertical: 36,
    },
});