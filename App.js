import 'react-native-gesture-handler';
// The statement above must be at the absolute top of the entry file (app.js)

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Fonts
import {
    Outfit_100Thin,
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black,
} from '@expo-google-fonts/outfit';
import {
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

// Navigation Packages
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

// Lucide Icons
import { Home } from 'lucide-react-native';
import { TrendingUp } from 'lucide-react-native';
import { BookOpen } from 'lucide-react-native';
import { Users } from 'lucide-react-native';


// SplashScreen.preventAutoHideAsync();

export default function App() {
    let [fontsLoaded] = useFonts({
        Outfit_100Thin,
        Outfit_200ExtraLight,
        Outfit_300Light,
        Outfit_400Regular,
        Outfit_500Medium,
        Outfit_600SemiBold,
        Outfit_700Bold,
        Outfit_800ExtraBold,
        Outfit_900Black,

        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic,
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    const Stack = createStackNavigator();
    const BottomTab = createBottomTabNavigator();
    const Drawer = createDrawerNavigator();
    const TopTab = createMaterialTopTabNavigator();


    return (
        <NavigationContainer onReady={onLayoutRootView}>
            <BottomTab.Navigator
                screenOptions={({route}) => ({
                    // adds custom icons for tabs
                    tabBarIcon: ({focused}) => {
                        let icon;
                        
                        if (route.name === "HomeScreen") {
                            icon = focused ? <Home color="black" size={48} /> : <Home color="blue" size={48} />;
                        } else if (route.name === "MarketScreen") {
                            icon = focused ? <TrendingUp color="black" size={48} /> : <TrendingUp color="blue" size={48} />;
                        } else if (route.name === "DictionaryScreen") {
                            icon = focused ? <BookOpen color="black" size={48} /> : <BookOpen color="blue" size={48} />;
                        } else if (route.name === "CommunityScreen") {
                            icon = focused ? <Users color="black" size={48} /> : <Users color="blue" size={48} />;
                        }
                        return icon;
                    }
                })}
            >
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
