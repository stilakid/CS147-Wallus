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
        console.warn("Sign in");
        console.log(data);

        const {error} = await supabase.auth.signInWithPassword(
            {
                email: data.email,
                password: data.password
            },
        );

        if (error) {
            console.log('error', error);
            console.warn('error', error);
            return;
        }

        navigation.navigate('Bottom Tab Navigator', { screen: 'HomeStack' });
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
                <View style={styles.credentialsContainer}>
                    <AppInput
                        name="email"
                        placeholder={'Email'}
                        control={control}
                        rules={{required: 'Email is required'}}
                        ContainerStyle={styles.inputBox}
                    />
                    <AppInput
                        name="password"
                        placeholder={'Password'}
                        control={control}
                        secureTextEntry
                        rules={{required: 'Password is required'}}
                        ContainerStyle={styles.inputBox}
                    />
                </View>
                

                

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
        // backgroundColor: 'black'
    },
    scrollContent: {
        paddingHorizontal: 16,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    scrollContainer: {
        width: '100%'
    },
    logo: {
        resizeMode: 'contain',
        width: 350,
        height: 350
    },
    inputBox: {
        width: '91%'
    },
    credentialsContainer: {
        alignItems: 'center',
        display: 'flex',
        marginVertical: 32,
        width: '100%'
    }
});
// TODO: I hardcoded inputBox width