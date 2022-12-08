import { Themes, Images } from "../../../assets/themes";
import { useState } from "react";

// Components
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import AppInput from "../../components/CustomInput/customInput";
import { AppButton } from "../../components/Buttons/buttons";
import { AppText } from "../../components/CustomText/customText";
import { SocialSignInButtons } from "../../components/Buttons/socialSignInButtons";
import { useForm } from "react-hook-form";

import { supabase } from "../../../supabase";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default function RegisterScreen({navigation, route}) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordRepeat, setPasswordRepeat] = useState('');

    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');

    const onRegisterPressed = async (data) => {
        console.warn(data);
        console.log(data);
        const {error} = await supabase.auth.signUp(
            {
                email: data.email,
                password: data.password
            },
        );
        if (error) {
            console.log(error);
            console.warn(error);
            return;
        }
        navigation.navigate('Username Screen');
    }
    
    const onForgotPasswordPressed = () => {
        navigation.navigate('Forgot Password Screen');
    }
    
    const onSignInPressed = () => {
        navigation.navigate('Login Screen')
    }
    
    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    }
    
    const onPrivacyPolicyPressed = () => {
        console.warn('onPrivacyPolicyPressed');
    }
    

    return (
        <SafeAreaView style = {styles.container} showVerticalScrollIndicator={false} >
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
            <AppText.TitleBoldOne>Create an account</AppText.TitleBoldOne>
            <AppInput
                name="email"
                control={control}
                placeholder={'Email'}
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: EMAIL_REGEX,
                        message: "Email is invalid"
                    }
                }}
            />
            <AppInput
                name="password"
                control={control}
                placeholder={'Password'}
                secureTextEntry
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 8,
                        message: 'Password should be at least 8 characters long'
                    },
                }}
            />
            <AppInput
                name="confirm_password"
                control={control}
                placeholder={'Confirm Password'}
                secureTextEntry
                rules={{
                    validate: value => 
                        value === pwd || 'Password do not match'
                }}
            />

            <AppButton.PrimaryThickOne text={'Register'} onPress={handleSubmit(onRegisterPressed)} />

            <Text>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed} >Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed} >Privacy Policy</Text></Text>
            <AppButton.SecondaryOutlineThickOne
                text={'Forgot password'}
                onPress={onForgotPasswordPressed}
            />

            <SocialSignInButtons />

            <Text>Have an account? <Text onPress={onSignInPressed} >Sign in.</Text></Text>


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