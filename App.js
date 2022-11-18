import 'react-native-gesture-handler';
// The statement above must be at the absolute top of the entry file (app.js)

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function App() {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const TopTab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
