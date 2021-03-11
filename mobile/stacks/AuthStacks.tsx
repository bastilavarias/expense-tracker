import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScreenStackHeaderConfig } from 'react-native-screens';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { ScreenParamList } from '../screens/ScreenParamList';

const Stack = createStackNavigator<ScreenParamList>();

export default function AuthStacks() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Sign In', headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Sign Up', headerShown: false }} />
        </Stack.Navigator>
    )
}

