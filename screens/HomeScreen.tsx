import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';
import { ExpenseIncomeContext } from '../provider/ExpenseIncomeProvider';
import { utilStyle } from '../styles';
import { ScreenProps } from './ScreenParamList';

export default function LoginScreen({ navigation, route }: ScreenProps<'Home'>) {
    const { statement, fetchIncomeExpenses } = useContext(ExpenseIncomeContext)
    const { user } = useContext(AuthContext)

    return (
        <View style={utilStyle.container}>
            <Text> Current Balance: {statement.balance} </Text>
            <Text> Current Income: {statement.incomes} </Text>
            <Text style={utilStyle.mb1}> Current Expenses: {statement.expenses} </Text>
            {console.log(user)}
            <Button title="Add Expenses" onPress={() => navigation.navigate('AddTransaction')}></Button>

        </View>
    );
}
