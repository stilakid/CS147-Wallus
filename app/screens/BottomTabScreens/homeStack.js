import { Themes } from "../../../assets/themes";

// Components
import { StyleSheet, Text, View } from "react-native";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";


// Navigation Packages
import { createStackNavigator } from '@react-navigation/stack';

// Stack screens
import NotificationScreen from "../NotificationScreen/notificationScreen";
import HomeScreen from "../HomeScreen/homeScreen";
import InvitationScreen from "../InvitationScreen/invitationScreen";
import StockScreen from "../StockScreen/stockScreen";
import CongratsScreen from "../CongratulationsScreen/congratulationsScreen";
import GroupDetail from "../GroupScreens/GroupDetail";
import Rationale from "../GroupScreens/Rationale"
import MemberScreen from "../GroupScreens/MemberScreen";
import BuyScreen from "../BuyScreen/BuyScreen";
import BuyConfirmationScreen from "../BuyConfirmationScreen/BuyConfirmationScreen";
import SellConfirmationScreen from "../SellConfirmationScreen/SellConfirmation";
import SellScreen from "../SellScreen/SellScreen";
import Community from "../Community/Community"
import SelectFriends from "../InviteFriend/selectFriends";
import InviteConfirmation from "../InviteFriend/InviteConfirmation";
import InviteCongratsScreen from "../CongratulationsScreen/inviteCongratulations";
import ChatScreen from "../ChatScreen/chatScreen";
import ProfileScreen from "../ProfileScreen/profileScreen";
import AskInvestmentExpScreen from "../UpdatePrefScreens/askInvestmentExp";
import InvestmentGoalsScreen from "../UpdatePrefScreens/investmentGoals";
import UpdatePrefConfirmation from "../UpdatePrefScreens/updatePrefConfirmation";






export default function HomeStack({navigation, route}) {
    
    // const {  } = route.params;

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home Screen" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="Notifications" component={NotificationScreen} options={{headerShown: false}} />
            <Stack.Screen name="Invitation" component={InvitationScreen} options={{headerShown: false}} />
            <Stack.Screen name="Stock" component={StockScreen} options={{headerShown: false}} />
            <Stack.Screen name="Congrats" component={CongratsScreen} options={{headerShown: false}} />
            <Stack.Screen name="Group Detail" component={GroupDetail} options={{headerShown: false}} />
            <Stack.Screen name="Chat Screen" component={ChatScreen} options={{headerShown: false}} />
            <Stack.Screen name="Rationale" component={Rationale} options={{headerShown: false}} />
            <Stack.Screen name="Member Screen" component={MemberScreen} options={{headerShown: false}} />
            <Stack.Screen name="Buy" component={BuyScreen} options={{headerShown: false}} />
            <Stack.Screen name="Buy Confirmation" component={BuyConfirmationScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Sell" component={SellScreen} options={{headerShown: false}} />
            <Stack.Screen name="Sell Confirmation" component={SellConfirmationScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Community" component={Community} options={{headerShown: false}}/>
            <Stack.Screen name="Select Friends" component={SelectFriends} options={{headerShown: false}}/>
            <Stack.Screen name="Invite Confirmation" component={InviteConfirmation} options={{headerShown: false}}/>
            <Stack.Screen name="Invite Congrats Screen" component={InviteCongratsScreen} options={{headerShown: false}} />
            <Stack.Screen name="Profile Screen" component={ProfileScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Ask Investment Experience Screen" component={AskInvestmentExpScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Investment Goals Screen" component={InvestmentGoalsScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Update Preference Confirmation Screen" component={UpdatePrefConfirmation} options={{headerShown: false}}/>

            
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