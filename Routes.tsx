import React, { useState } from 'react'
import AuthStacks from './stacks/AuthStacks';
import AppStacks from './stacks/AppStacts';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenParamList } from './screens/ScreenParamList';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator<ScreenParamList>();

export default function Routes() {
    const [isSignedIn] = useState(false);
    return (
        <NavigationContainer>
            {isSignedIn ? <AppStacks /> : <AuthStacks />}
        </NavigationContainer>
    )

};

