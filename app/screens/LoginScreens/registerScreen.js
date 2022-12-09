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

import { supabase } from "../../../supabase";
import App from "../../../App";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


export default function RegisterScreen({navigation, route}) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordRepeat, setPasswordRepeat] = useState('');

    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password');

    const onRegisterPressed = async (data) => {
        // console.warn(data);
        console.log(data);
        const {error} = await supabase.auth.signUp(
            {
                email: data.email,
                password: data.password
            },
        );
        if (error) {
            console.log(error);
            // console.warn(error);
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
        // console.warn('onTermsOfUsePressed');
    }
    
    const onPrivacyPolicyPressed = () => {
        // console.warn('onPrivacyPolicyPressed');
    }
    

    return (
        <SafeAreaView style = {styles.container} showVerticalScrollIndicator={false} >
            <Header navigation={navigation} style={{width:'100%'}}/>
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
            <AppText.TitleBoldOne style={{width:'100%', marginTop: 80}}>Create an account</AppText.TitleBoldOne>
            <View style={styles.credentialsContainer}>
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
                    ContainerStyle={styles.inputBox}
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
                    ContainerStyle={styles.inputBox}
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
                    ContainerStyle={styles.inputBox}
                />
            </View>
            
            <AppButton.PrimaryThickOne text={'Register'} onPress={handleSubmit(onRegisterPressed)} />

            <AppText.ParagraphThree style={[styles.text,{width: '80%', textAlign:'center', marginTop:24}]}>By registering, you confirm that you accept our <AppText.LabelSemiBoldTwo style={styles.clickableText} onPress={onTermsOfUsePressed} >Terms of Use</AppText.LabelSemiBoldTwo> and <AppText.LabelSemiBoldTwo style={styles.clickableText} onPress={onPrivacyPolicyPressed} >Privacy Policy</AppText.LabelSemiBoldTwo></AppText.ParagraphThree>
            

            <SocialSignInButtons />
            <AppText.LabelSemiBoldTwo style={styles.clickableText} onPress={onForgotPasswordPressed}>Forgot password?</AppText.LabelSemiBoldTwo>
            <AppText.ParagraphThree style={styles.text}>Have an account? <AppText.LabelSemiBoldTwo style={styles.clickableText} onPress={onSignInPressed} >Sign in.</AppText.LabelSemiBoldTwo></AppText.ParagraphThree>
            


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
        width: '100%'
    },
    credentialsContainer: {
        alignItems: 'center',
        display: 'flex',
        marginVertical: 32,
        width: '100%'
    },
    forgotPasswordContainer: {
        marginVertical: 32
    },
    text: {
        color: Themes.colors.neutral_600,
        marginBottom: 4,
    },
    clickableText: {
        color: Themes.colors.primary_600,
        marginBottom: 4,
    }
});