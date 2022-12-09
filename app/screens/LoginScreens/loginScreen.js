import { Themes, Images } from "../../../assets/themes";
import { useState } from "react";
import { supabase } from "../../../supabase";

// Components
import { StyleSheet, View, Text, SafeAreaView, Image, ScrollView, TextInput } from "react-native";
import AppInput from "../../components/CustomInput/customInput";
import { AppButton } from "../../components/Buttons/buttons";
import { SocialSignInButtons } from "../../components/Buttons/socialSignInButtons";
import { useForm, Controller } from "react-hook-form";
import { AppText } from "../../components/CustomText/customText";
import { TouchableOpacity } from "react-native-gesture-handler";




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
                <AppText.TitleBoldTwo>Welcome to Wallus!</AppText.TitleBoldTwo>
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
                <View style={{height:12}}/>
    

                <SocialSignInButtons/>

                <AppText.LabelSemiBoldTwo style={styles.clickableText} onPress={onForgotPasswordPressed}>Forgot password?</AppText.LabelSemiBoldTwo>
                <AppText.ParagraphThree style={styles.text}>Don't have an account? <AppText.LabelSemiBoldTwo style={styles.clickableText} onPress={onSignUpPressed} >Create one.</AppText.LabelSemiBoldTwo></AppText.ParagraphThree>

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
        marginTop: 148,
        width: 120,
        height: 120,
        marginBottom: 24,
    },
    inputBox: {
        width: '100%'
    },
    credentialsContainer: {
        alignItems: 'center',
        display: 'flex',
        marginVertical: 24,
        width: '100%'
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
// TODO: I hardcoded inputBox width