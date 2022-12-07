import { Themes, Images } from "../../../assets/themes";
import { useState } from "react";
import { supabase } from "../../../supabase";

// Components
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView, TextInput } from "react-native";
import AppInput from "../../components/CustomInput/customInput";
import { AppButton } from "../../components/Buttons/buttons";
import { SocialSignInButtons } from "../../components/Buttons/socialSignInButtons";
import { useForm, Controller } from "react-hook-form";




export default function LoginScreen({navigation, route}) {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm();


    const onSignInPressed = async (data) => {
        // navigation.navigate('Register Screen');
        console.warn("Sign in");
        console.log(data);

        const {error} = await supabase.auth.signInWithPassword(
            {
                email: data.email,
                password: data.password
            },
        );

        // console.log('error', error)

        navigation.navigate('Chat Screen')
    }
    
    const onForgotPasswordPressed = () => {
        navigation.navigate('Forgot Password Screen');
    }
    
    const onSignUpPressed = () => {
        navigation.navigate('Register Screen');
    }



    return (
        <SafeAreaView style = {styles.container} showVerticalScrollIndicator={false} >
            <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
            <Image
                source={Images.Wallus_square}
                style={styles.logo}
            />
            <AppInput
                name="email"
                placeholder={'Email'}
                control={control}
                rules={{required: 'Email is required'}}
            />
            <AppInput
                name="password"
                placeholder={'Password'}
                control={control}
                secureTextEntry
                rules={{required: 'Password is required'}}
            />

            

            <AppButton.PrimaryThickOne text={'Sign in'} onPress={handleSubmit(onSignInPressed)} />

            <AppButton.SecondaryOutlineThickOne text={'Forgot password'} onPress={onForgotPasswordPressed} />

            <SocialSignInButtons />

            <Text>Don't have an account? <Text onPress={onSignUpPressed} >Create one.</Text></Text>

            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 16,
    },
    scrollContent: {
        display: 'flex',
        alignItems: 'center',
    },
    scrollContainer: {
        marginHorizontal: 16
    },
    logo: {
        width: '75%',
        height: '50%',
        resizeMode: 'contain'
    }
});