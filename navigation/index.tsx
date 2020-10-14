import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import NavigationScreens from '../constants/NavigationScreens';
import { 
    PomodoroScreen
} from '../screens/index';

const Stack = createStackNavigator();

export default function RootNavigator(){
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}> 
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name={NavigationScreens.pomodoro.name} component={PomodoroScreen} />
        </Stack.Navigator>
    )
}