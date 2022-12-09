import { Themes, Images } from "../../../assets/themes";
import { useState } from "react";

// Components
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import AppInput from "../../components/CustomInput/customInput";
import { AppButton } from "../../components/Buttons/buttons";
import { AppText } from "../../components/CustomText/customText";
import { SocialSignInButtons } from "../../components/Buttons/socialSignInButtons";
import { useForm } from "react-hook-form";


export default function ConfirmEmailScreen({navigation, route}) {
    // const [code, setCode] = useState('');

    const {control, handleSubmit} = useForm('');

    const onConfirmPressed = (data) => {
        // console.warn(data);
        // console.warn("onConfrimPressed");
    }
    
    const onResendPressed = () => {
        // console.warn('onResendPressed');
    }
    
    const onSignInPressed = () => {
        navigation.navigate('Login Screen');
    }


    return (
        <SafeAreaView style = {styles.container} showVerticalScrollIndicator={false} >
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
            <AppText.TitleBoldOne>Confirm your email</AppText.TitleBoldOne>
            <AppInput
                name="code"
                control={control}
                placeholder={'Enter your confirmation code'}
                rules={{
                    required: "Confirmation code is required"
                }}
            /> 

            <AppButton.PrimaryThickOne
                text={'Confirm'}
                onPress={handleSubmit(onConfirmPressed)}
            />

            <AppButton.PrimaryThickOne
                text={'Resend code'}
                onPress={onResendPressed}
            />

            <AppButton.PrimaryThickOne
                text={'Back to Sign In'}
                onPress={onSignInPressed}
            />

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
});