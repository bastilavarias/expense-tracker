import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native';
import { AuthContext } from '../provider/AuthProvider';
import { ExpenseIncomeContext } from '../provider/ExpenseIncomeProvider';
import HomeScreen from '../screens/HomeScreen';
import { ScreenParamList } from '../screens/ScreenParamList';
import { createStackNavigator } from '@react-navigation/stack';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import HomeTabs from '../tabs/HomeTabs';
import CategoryModal from '../modals/CategoryModal';

const Stack = createStackNavigator<ScreenParamList>();


export default function AppStacks() {
    const { onLogout } = useContext(AuthContext);
    const { fetchIncomeExpenses } = useContext(ExpenseIncomeContext);

    return (
        <Stack.Navigator mode="modal" initialRouteName="Category" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Category" component={CategoryModal} />
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
        </Stack.Navigator>
    )
}


