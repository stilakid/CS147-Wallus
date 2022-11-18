import 'react-native-gesture-handler';
// The statement above must be at the absolute top of the entry file (app.js)

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Tab screens
import HomeScreen from "./app/components/homeScreen";
import MarketScreen from "./app/components/marketScreen";
import DictionaryScreen from "./app/components/dictionaryScreen";
import CommunityScreen from "./app/components/communityScreen";



export default function App() {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const TopTab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
        <BottomTab.Navigator>
            <BottomTab.Screen name = "HomeScreen" component = {HomeScreen} />
            <BottomTab.Screen name = "MarketScreen" component={MarketScreen} />
            <BottomTab.Screen name = "DictionaryScreen" component={DictionaryScreen} />
            <BottomTab.Screen name = "CommunityScreen" component={CommunityScreen} />
        </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
