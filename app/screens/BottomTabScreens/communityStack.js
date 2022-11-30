import { StyleSheet, Text, View } from "react-native";
import { Themes } from "../../../assets/themes";
import { AppText } from "../../components/CustomText/customText";
import { AppButton } from "../../components/Buttons/buttons";
import { Divider } from "../../components/Divider/divider";


// Navigation Packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Stack screens
import NotificationScreen from "../NotificationScreen/notificationScreen";
import CommunityScreen from "../CommunityScreen/communityScreen";

export default function CommunityStack({navigation, route}) {
    
// const {  } = route.params;

const Stack = createStackNavigator();

return(
    <Stack.Navigator>
        <Stack.Screen name="Community Screen" component={CommunityScreen} options={{headerShown: false}} />
        <Stack.Screen name="Notifications" component={NotificationScreen} options={{headerShown: false}} />
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