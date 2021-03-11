import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native';
import { AuthContext } from '../provider/AuthProvider';
import { ExpenseIncomeContext } from '../provider/ExpenseIncomeProvider';
import HomeScreen from '../screens/HomeScreen';
import { ScreenParamList } from '../screens/ScreenParamList';
import { createStackNavigator } from '@react-navigation/stack';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import HomeTabs from '../tabs/HomeTabs';

const Stack = createStackNavigator<ScreenParamList>();


export default function AppStacks() {
    const { onLogout } = useContext(AuthContext);
    const { fetchIncomeExpenses } = useContext(ExpenseIncomeContext);

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeTabs} options={{
                headerTitle: 'Home'
            }} />
            <Stack.Screen name="AddTransaction" component={AddTransactionScreen} options={{
                headerTitle: 'Add Expenses'
            }} />

        </Stack.Navigator>
    )
}


