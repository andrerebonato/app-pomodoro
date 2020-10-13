import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import { RFValue } from '../helpers/fontSize';
import NavigationScreens from '../constants/NavigationScreens';
import { 
    DashboardScreen, PomodoroScreen
} from '../screens/index';
import Dashboard from '../screens/Dashboard';


interface ITabBarIcon {
    name: string,
    color: string
}

function TabBarIcon({ name, color }: ITabBarIcon) {
    return <MaterialCommunityIcons size={26} name={name} color={color} />;
}

const BottomTab = createMaterialBottomTabNavigator();
const PomodoroStack = createStackNavigator();
const DashboardStack = createStackNavigator();

function PomodoroNavigator(){
    return (
        <PomodoroStack.Navigator>
            <PomodoroStack.Screen 
                name={NavigationScreens.pomodoro.name}
                component={PomodoroScreen}
                options={{
                    headerTitle: NavigationScreens.pomodoro.displayName,
                    headerStyle: {
                        backgroundColor: Colors.primary.background
                    },
                    headerTitleStyle: {
                        fontSize: RFValue(20),
                        color: Colors.primary.black,
                        fontFamily: Fonts.primary.bold
                    }
                }}
            />
        </PomodoroStack.Navigator>
    )
}

function DashboardNavigator(){
    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen 
                name={NavigationScreens.dashboard.name}
                component={DashboardScreen}
                options={{
                    headerTitle: NavigationScreens.dashboard.displayName,
                    headerStyle: {
                        backgroundColor: Colors.primary.background
                    },
                    headerTitleStyle: {
                        fontSize: RFValue(20),
                        color: Colors.primary.black,
                        fontFamily: Fonts.primary.bold
                    }
                }}
            />
        </DashboardStack.Navigator>
    )
}

const BottomTabNavigator = () => (
    <BottomTab.Navigator
        initialRouteName={NavigationScreens.dashboard.name}
        activeColor={Colors.primary.active}
        inactiveColor={Colors.primary.inactive}
        barStyle={{
            backgroundColor: Colors.primary.background
        }}
    >
        <BottomTab.Screen 
            name={NavigationScreens.navigator.dashboard}
            component={DashboardNavigator}
            options={{
                tabBarLabel: NavigationScreens.dashboard.displayName,
                tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />
            }}
        />
        <BottomTab.Screen 
            name={NavigationScreens.navigator.pomodoro}
            component={PomodoroNavigator}
            options={{
                tabBarLabel: NavigationScreens.pomodoro.displayName,
                tabBarIcon: ({ color }) => <TabBarIcon name="clock" color={color} />
            }}
        />
    </BottomTab.Navigator>
);

export default BottomTabNavigator;