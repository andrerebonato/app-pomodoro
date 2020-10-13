import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from '../constants/Colors';
import NavigationScreens from '../constants/NavigationScreens';
import { 
    DashboardScreen, PomodoroScreen
} from '../screens/index';

interface ITabBarIcon {
    name: string,
    color: string
}

function TabBarIcon({ name, color }: ITabBarIcon) {
    return <MaterialCommunityIcons size={26} name={name} color={color} />;
}

const BottomTab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => (
    <BottomTab.Navigator
        initialRouteName={NavigationScreens.dashboard.name}
        inactiveColor={Colors.primary.inactive}
        barStyle={{
            backgroundColor: Colors.primary.background
        }}
    >
        <BottomTab.Screen 
            name={NavigationScreens.dashboard.name}
            component={DashboardScreen}
            options={{
                tabBarLabel: NavigationScreens.dashboard.displayName,
                tabBarIcon: () => <TabBarIcon name="home" color={Colors.primary.active} />
            }}
        />
        <BottomTab.Screen 
            name={NavigationScreens.pomodoro.name}
            component={PomodoroScreen}
            options={{
                tabBarLabel: NavigationScreens.pomodoro.displayName,
                tabBarIcon: () => <TabBarIcon name="clock" color={Colors.primary.active} />
            }}
        />
    </BottomTab.Navigator>
);

export default BottomTabNavigator;