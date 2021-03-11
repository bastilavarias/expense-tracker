import React, { useContext, useState, useEffect } from 'react'
import AuthStacks from './stacks/AuthStacks';
import AppStacks from './stacks/AppStacts';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenParamList } from './screens/ScreenParamList';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './provider/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Text } from 'react-native';
import Center from './components/Center';
import { ExpenseIncomeContext } from './provider/ExpenseIncomeProvider';
import AppDrawer from './drawers/AppDrawer';

const Stack = createStackNavigator<ScreenParamList>();

export default function Routes() {
    const { user } = useContext(AuthContext);
    // const { fetchIncomeExpenses } = useContext(ExpenseIncomeContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AsyncStorage.getItem('user').then(userString => {
            if (userString) {
                setLoading(false)
            } else {
                setLoading(false)
            }
        });
    }, [])
    if (loading) {
        return (
            <Center>
                <ActivityIndicator size="large" color="red" />
                <Text>Loading</Text>
            </Center>
        )
    }


    return (
        <NavigationContainer>
            {user ? <AppDrawer /> : <AuthStacks />}

        </NavigationContainer>
    )

};

