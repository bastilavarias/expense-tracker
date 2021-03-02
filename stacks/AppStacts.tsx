import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import { ScreenParamList } from '../screens/ScreenParamList';

const Stack = createStackNavigator<ScreenParamList>();

export default function AppStacks() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        </Stack.Navigator>
    )
}


