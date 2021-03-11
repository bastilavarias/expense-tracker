import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler'
import { AuthContext } from '../provider/AuthProvider'
import { buttonStyle, utilStyle } from '../styles'
import { ExpenseIncomeType, StatementType } from '../provider/ExpenseIncomeProvider'
import { CATEGORY, COLORS } from '../constants';
import StatementCard from '../components/StatementCard'
import Container from '../components/Container'
import HelloUser from '../components/HelloUser'
import { EXPENSES_DUMMY } from '../constants/data'
import FloatingButton from '../components/FloatingButton'

const ExpensesScreen = () => {

    return (
        <Container style={{ paddingTop: 60 }}>
            <HelloUser />

            <View style={{ backgroundColor: COLORS.primary, borderRadius: 15, padding: 20, marginTop: 10 }} >
                <Text style={{ color: COLORS.white }}>Spendings</Text>

                <Text style={{ color: COLORS.white }}><Text style={{ fontSize: 16, marginBottom: 5 }}>$</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>12,560.00</Text>
                </Text>
            </View>
            <FloatingButton iconName="add" onPress={() => console.log('Hello')} />
            <FlatList contentContainerStyle={{ paddingVertical: 20 }} data={EXPENSES_DUMMY} renderItem={({ item }) => <StatementCard item={item} />} keyExtractor={item => item.id!} />
        </Container>
    )
}

export default ExpensesScreen

