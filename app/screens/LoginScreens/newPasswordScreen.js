import { Themes, Images } from "../../../assets/themes";
import { useState } from "react";

// Components
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import AppInput from "../../components/CustomInput/customInput";
import { AppButton } from "../../components/Buttons/buttons";
import { AppText } from "../../components/CustomText/customText";
import { SocialSignInButtons } from "../../components/Buttons/socialSignInButtons";
import { useForm } from "react-hook-form";

const onSubmitPressed = (data) => {
    console.warn(data);
    console.warn("onSubmitPressed");
}

const onResendPressed = () => {
    console.warn('onResendPressed');
}

const onSignInPressed = () => {
    console.warn('onSignInPressed');
}

export default function NewPasswordScreen({navigation, route}) {
    // const [code, setCode] = useState('');
    // const [newPassword, setNewPassword] = useState('');

    const {control, handleSubmit} = useForm('');



    return (
        <SafeAreaView style = {styles.container} showVerticalScrollIndicator={false} >
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
            <AppText.TitleBoldOne>Reset your password</AppText.TitleBoldOne>
            
            <AppInput
                name="code"
                control={control}
                rules={{
                    required: 'Code is required'
                }}
                placeholder={'Code'}
            /> 

            <AppInput
                name="password"
                control={control}
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 8,
                        message: 'Password shoud be at least 8 characters long'
                    }
                }}
                placeholder={'Enter your new password'}
                secureTextEntry
            /> 

            <AppButton.PrimaryThickOne
                text={'Submit'}
                onPress={handleSubmit(onSubmitPressed)}
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