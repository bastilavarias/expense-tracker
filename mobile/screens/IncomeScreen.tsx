import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Container from '../components/Container'
import HelloUser from '../components/HelloUser'
import StatementCard from '../components/StatementCard'
import { EXPENSES_DUMMY } from '../constants/data'

const IncomeScreen = () => {
    return (
        <Container style={{ paddingTop: 60 }}>
            <HelloUser />

            <View style={{ backgroundColor: 'yellow', borderRadius: 15, padding: 20, marginTop: 10 }}>
                <Text>Income</Text>

                <Text><Text style={{ fontSize: 16, marginBottom: 5 }}>$</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>12,560.00</Text>
                </Text>
            </View>

            <FlatList contentContainerStyle={{ paddingVertical: 20 }} data={EXPENSES_DUMMY} renderItem={({ item }) => <StatementCard item={item} />} keyExtractor={item => item.id!} />
        </Container>
    )
}

export default IncomeScreen
