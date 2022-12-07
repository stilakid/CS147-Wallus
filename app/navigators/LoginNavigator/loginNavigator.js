import { Themes } from "../../../assets/themes";

// Components
import { StyleSheet, Text, View } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";

// Navigation Packages
import { createStackNavigator } from '@react-navigation/stack';


// Login Screens
import LoginScreen from "../../screens/LoginScreens/loginScreen";
import RegisterScreen from "../../screens/LoginScreens/registerScreen";
import ConfirmEmailScreen from "../../screens/LoginScreens/confirmEmailScreen";
import ForgotPasswordScreen from "../../screens/LoginScreens/forgotPasswordScreen";
import NewPasswordScreen from "../../screens/LoginScreens/newPasswordScreen";


export default function LoginNavigator() {
    
    // const {  } = route.params;

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="Login Screen" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Register Screen" component={RegisterScreen} options={{headerShown: false}} />
            <Stack.Screen name="Confirm Email Screen" component={ConfirmEmailScreen} options={{headerShown: false}} />
            <Stack.Screen name="Forgot Password Screen" component={ForgotPasswordScreen} options={{headerShown: false}} />
            <Stack.Screen name="New Password Screen" component={NewPasswordScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.white,
        alignItems: "center",
        flex: 1,
      },
});
