import { Themes } from "../../../assets/themes";

// Components
import { StyleSheet, Text, View } from "react-native";

// Navigation Packages
import { createStackNavigator } from '@react-navigation/stack';

// Stack screens

// Basic Login Screens
import LoginScreen from "../../screens/LoginScreens/loginScreen";
import RegisterScreen from "../../screens/LoginScreens/registerScreen";
import ForgotPasswordScreen from "../../screens/LoginScreens/forgotPasswordScreen";
import ConfirmEmailScreen from "../../screens/LoginScreens/confirmEmailScreen";
import NewPasswordScreen from "../../screens/LoginScreens/newPasswordScreen";

// Onboarding Screens
import AskInvestmentExpScreen from "../../screens/OnboardingScreens/askInvestmentExp";
import ExpandedPreferencesScreen from "../../screens/OnboardingScreens/expandedPreferences";
import HighPreferenceScreen from "../../screens/OnboardingScreens/highPref";
import InvestmentGoalsScreen from "../../screens/OnboardingScreens/investmentGoals";
import MediumPreferenceScreen from "../../screens/OnboardingScreens/mediumPref";
import OnboardingConfirmationSCreen from "../../screens/OnboardingScreens/onboardingConfirmation";
import StartingPreferenceScreen from "../../screens/OnboardingScreens/startingPreference";
import UserNameInputScreen from "../../screens/OnboardingScreens/userNameInput";

// Tab Navigator
import BottomTabNavigator from "../BottomTabNavigator/bottomTabNavigator";

export default function LoginNavigator({navigation, route}) {
        
    // const {  } = route.params;

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="Login Screen" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Register Screen" component={RegisterScreen} options={{headerShown: false}} />
            <Stack.Screen name="Forgot Password Screen" component={ForgotPasswordScreen} options={{headerShown: false}} />
            <Stack.Screen name="Confirm Email Screen" component={ConfirmEmailScreen} options={{headerShown: false}} />
            <Stack.Screen name="New Password Screen" component={NewPasswordScreen} options={{headerShown: false}} />

            <Stack.Screen name="Investment Experience Screen" component={AskInvestmentExpScreen} options={{headerShown: false}} />
            <Stack.Screen name="Expanded Preference Screen" component={ExpandedPreferencesScreen} options={{headerShown: false}} />
            <Stack.Screen name="High Preference Screen" component={HighPreferenceScreen} options={{headerShown: false}} />
            <Stack.Screen name="Investment Goals Screen" component={InvestmentGoalsScreen} options={{headerShown: false}} />
            <Stack.Screen name="Medium Preference Screen" component={MediumPreferenceScreen} options={{headerShown: false}} />
            <Stack.Screen name="Onboarding Confirmation Screen" component={OnboardingConfirmationSCreen} options={{headerShown: false}} />
            <Stack.Screen name="Starting Preference Screen" component={StartingPreferenceScreen} options={{headerShown: false}} />
            <Stack.Screen name="Username Screen" component={UserNameInputScreen} options={{headerShown: false}} />

            <Stack.Screen name="Bottom Tab Navigator" component={BottomTabNavigator} options={{headerShown: false}} />
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