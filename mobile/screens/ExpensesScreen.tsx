import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Container from '../components/Container'
import FloatingButton from '../components/FloatingButton'
import HelloUser from '../components/HelloUser'
import StatementCard from '../components/StatementCard'
import { COLORS } from '../constants'
import { EXPENSES_DUMMY } from '../constants/data'
import { ScreenProps } from './ScreenParamList'

const ExpensesScreen: React.FC<ScreenProps<'Expenses'>> = ({ navigation }) => {

    return (
        <Container>
            <HelloUser />

            <View style={{ backgroundColor: COLORS.primary, borderRadius: 15, padding: 20, marginTop: 10 }} >
                <Text style={{ color: COLORS.white }}>Spendings</Text>

                <Text style={{ color: COLORS.white }}><Text style={{ fontSize: 16, marginBottom: 5 }}>$</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>12,560.00</Text>
                </Text>
            </View>
            <FloatingButton iconName="add" onPress={() => { console.log('Hello World'); navigation.navigate('AddTransaction') }} />
            <FlatList contentContainerStyle={{ paddingVertical: 20 }} data={EXPENSES_DUMMY} renderItem={({ item }) => <StatementCard item={item} />} keyExtractor={item => item.id!} />
        </Container>
    )
}

export default ExpensesScreen

