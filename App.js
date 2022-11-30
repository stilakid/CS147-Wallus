import 'react-native-gesture-handler';
// The statement above must be at the absolute top of the entry file (app.js)

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Themes } from "./assets/themes"


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
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Tab screens
import HomeStack from "./app/screens/BottomTabScreens/homeStack";
import MarketStack from "./app/screens/BottomTabScreens/marketStack";
import DictionaryStack from "./app/screens/BottomTabScreens/dictionaryStack";
import CommunityStack from "./app/screens/BottomTabScreens/communityStack";

// Lucide Icons
import { Home } from 'lucide-react-native';
import { TrendingUp } from 'lucide-react-native';
import { BookOpen } from 'lucide-react-native';
import { Users } from 'lucide-react-native';


SplashScreen.preventAutoHideAsync();

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
                        
                        if (route.name === "HomeStack") {
                            icon = focused ? <Home size={24} /> : <Home color={Themes.colors.neutral_600} size={24} />;
                        } else if (route.name === "MarketStack") {
                            icon = focused ? <TrendingUp size={24} /> : <TrendingUp color={Themes.colors.neutral_600} size={24} />;
                        } else if (route.name === "DictionaryStack") {
                            icon = focused ? <BookOpen size={24} /> : <BookOpen color={Themes.colors.neutral_600} size={24} />;
                        } else if (route.name === "CommunityStack") {
                            icon = focused ? <Users size={24} /> : <Users color={Themes.colors.neutral_600} size={24} />;
                        }
                        return icon;
                    }
                })}
            >
                <BottomTab.Screen name = "HomeStack" component = {HomeStack} options={{headerShown: false}} />
                <BottomTab.Screen name = "MarketStack" component={MarketStack} options={{headerShown: false}} />
                <BottomTab.Screen name = "DictionaryStack" component={DictionaryStack} options={{headerShown: false}} />
                <BottomTab.Screen name = "CommunityStack" component={CommunityStack} options={{headerShown: false}} />
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
