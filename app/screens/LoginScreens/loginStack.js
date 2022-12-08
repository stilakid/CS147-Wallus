import { Themes } from "../../../assets/themes";

// Components
import { StyleSheet, Text, View } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider";


// Navigation Packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Stack screens

// Basic Login Screens
import LoginScreen from "./loginScreen";
import ChatScreen from "../ChatScreen/chatScreen";
import RegisterScreen from "./registerScreen";
import ForgotPasswordScreen from "./forgotPasswordScreen";
import ConfirmEmailScreen from "./confirmEmailScreen";
import NewPasswordScreen from "./newPasswordScreen";

// Onboarding Screens
import AskInvestmentExpScreen from "../OnboardingScreens/askInvestmentExp";
import ExpandedPreferencesScreen from "../OnboardingScreens/expandedPreferences";
import HighPreferenceScreen from "../OnboardingScreens/highPref";
import InvestmentGoalsScreen from "../OnboardingScreens/investmentGoals";
import MediumPreferenceScreen from "../OnboardingScreens/mediumPref";
import OnboardingConfirmationSCreen from "../OnboardingScreens/onboardingConfirmation";
import StartingPreferenceScreen from "../OnboardingScreens/startingPreference";
import UserNameInputScreen from "../OnboardingScreens/userNameInput";

export default function LoginStack({navigation, route}) {
        
    // const {  } = route.params;

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="Login Screen" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Register Screen" component={RegisterScreen} options={{headerShown: false}} />
            <Stack.Screen name="Forgot Password Screen" component={ForgotPasswordScreen} options={{headerShown: false}} />
            <Stack.Screen name="Confirm Email Screen" component={ConfirmEmailScreen} options={{headerShown: false}} />
            <Stack.Screen name="New Password Screen" component={NewPasswordScreen} options={{headerShown: false}} />
            <Stack.Screen name="Chat Screen" component={ChatScreen} options={{headerShown: false}} />
            <Stack.Screen name="Username Screen" component={UserNameInputScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    );
    }


    const styles = StyleSheet.create({
        container: {
            backgroundColor: Themes.colors.white,
            flex: 1,
        },
        header: {
        },
});