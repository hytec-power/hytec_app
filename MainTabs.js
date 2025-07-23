//MainTabs Working Code

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from 'react-native';

// Import your screens
import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import NotificationScreen from './NotificationScreen';
import SavedScreen from './SavedScreen';
import PrincipalsScreen from './PrincipalsScreen';
import AboutUsScreen from './AboutUsScreen';
import PrincipalDetailScreen from './PrincipalDetailScreen';




const Tab = createBottomTabNavigator();

const CustomTabLabel = ({ focused, label }) => (
    <Text
        style={{
            color: focused ? '#CA0000' : '#999',
            fontSize: 12,
            marginTop: 4,
        }}
    >
        {label}
    </Text>
);

const CustomTabIcon = ({ focused, source }) => (
    <Image
        source={source}
        style={{
            width: 24,
            height: 24,
            tintColor: focused ? '#CA0000' : '#999',
        }}
    />
);

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <CustomTabLabel focused={focused} label="Home" />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <CustomTabIcon
                            focused={focused}
                            source={require('../assets/images/home.png')}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarLabel: ({ focused }) => (
                        <CustomTabLabel focused={focused} label="Chats" />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <CustomTabIcon
                            focused={focused}
                            source={require('../assets/images/chat.png')}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

