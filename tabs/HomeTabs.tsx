import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import ExpensesScreen from '../screens/ExpensesScreen';
import IncomeScreen from '../screens/IncomeScreen';
import { ScreenParamList } from '../screens/ScreenParamList';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<ScreenParamList>();

const icons = {
    incomeOutline: 'wallet',
    income: 'wallet-outline',
    expensesOutline: 'cash-outline',
    expenses: 'cash',
}

const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, color, size }) => {
                let iconName: any;
                if (route.name === 'Income') {
                    iconName = focused ? icons.income : icons.incomeOutline
                } else if (route.name === 'Expenses') {
                    iconName = focused ? icons.expenses : icons.expensesOutline
                }

                return <Ionicons name={iconName} size={size} color={color} />
            },

        })}>
            <Tab.Screen name="Expenses" component={ExpensesScreen} />
            <Tab.Screen name="Income" component={IncomeScreen} />
        </Tab.Navigator>
    )
}

export default HomeTabs

const styles = StyleSheet.create({})
