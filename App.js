import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './mobile/screens/LoginScreen';
import ChatScreen from './mobile/screens/ChatScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ChatStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ChatList" component={ChatScreen} options={{ title: 'Messages' }} />
        </Stack.Navigator>
    );
};
const MainApp = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#007AFF', tabBarInactiveTintColor: '#8E8E93', }} >
            <Tab.Screen name="Chats" component={ChatStackNavigator} options={{ title: 'Messages', tabBarLabel: 'Chats' }} />
        </Tab.Navigator>
    );
};
const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isLoggedIn ? (
                    <Stack.Screen name="Login" options={{ animationEnabled: false }} >
                        {() => <LoginScreen onLogin={() => setIsLoggedIn(true)} />}
                    </Stack.Screen>
                ) : (
                    <Stack.Screen name="MainApp" options={{ animationEnabled: false }} component={MainApp} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default App;