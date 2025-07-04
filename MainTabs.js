import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import { View, Text } from 'react-native';

function Saved() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Saved</Text></View>; }
function Notification() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Notifications</Text></View>; }
function Chat() { return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Chat</Text></View>; }

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#CA0000',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { paddingBottom: 5, height: 60 },
                tabBarIcon: ({ color }) => {
                    let icon = route.name === 'Home' ? 'home' :
                        route.name === 'Saved' ? 'bookmark' :
                            route.name === 'Notification' ? 'notifications' :
                                'chatbubble';
                    return <Ionicons name={icon} size={24} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Chat" component={Chat} />
        </Tab.Navigator>
    );
}
