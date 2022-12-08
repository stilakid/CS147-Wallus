import React from 'react';
import { Themes } from '../../../assets/themes';

// Components
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';


// Navigation Packages
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Tab Stacks
import HomeStack from '../../screens/BottomTabScreens/homeStack';
import MarketStack from "../../screens/BottomTabScreens/marketStack";
import DictionaryStack from "../../screens/BottomTabScreens/dictionaryStack";
import CommunityStack from "../../screens/BottomTabScreens/communityStack";


// Lucide Icons
import { Home } from 'lucide-react-native';
import { TrendingUp } from 'lucide-react-native';
import { BookOpen } from 'lucide-react-native';
import { Users } from 'lucide-react-native';


export default function BottomTabNavigator({navigation, route}) {
    const BottomTab = createBottomTabNavigator();

    return (
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
            <BottomTab.Screen name = "HomeStack" component = {HomeStack} options={{headerShown: false, tabBarShowLabel: false}} />
            <BottomTab.Screen name = "MarketStack" component={MarketStack} options={{headerShown: false, tabBarShowLabel: false}} />
            <BottomTab.Screen name = "DictionaryStack" component={DictionaryStack} options={{headerShown: false, tabBarShowLabel: false}} />
            <BottomTab.Screen name = "CommunityStack" component={CommunityStack} options={{headerShown: false, tabBarShowLabel: false}} />
        </BottomTab.Navigator>
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




// This is the main branch
// This is the invitation branch
