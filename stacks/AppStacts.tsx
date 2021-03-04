import React, { useContext, useEffect } from 'react'
import { Button } from 'react-native';
import { AuthContext } from '../provider/AuthProvider';
import { ExpenseIncomeContext } from '../provider/ExpenseIncomeProvider';
import HomeScreen from '../screens/HomeScreen';
import { ScreenParamList } from '../screens/ScreenParamList';
import { createStackNavigator } from '@react-navigation/stack';
import AddTransaction from '../screens/AddTransaction';

const Stack = createStackNavigator<ScreenParamList>();

export default function AppStacks() {
    const { onLogout } = useContext(AuthContext);
    const { fetchIncomeExpenses } = useContext(ExpenseIncomeContext);

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                title: 'Home', headerRight: () => (
                    <Button title="Logout" onPress={() => onLogout()} />
                )
            }} />
            <Stack.Screen name="AddTransaction" component={AddTransaction} options={{
                headerTitle: 'Add Expenses'
            }} />

        </Stack.Navigator>
    )
}


