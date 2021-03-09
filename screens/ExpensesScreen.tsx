import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler'
import { AuthContext } from '../provider/AuthProvider'
import { utilStyle } from '../styles'
import { Ionicons } from '@expo/vector-icons'
import { ExpenseIncomeType, StatementType } from '../provider/ExpenseIncomeProvider'
import { CATEGORY } from '../constants';

const getCategory = (id: ExpenseIncomeType['categoryId']) => {
    const categories = CATEGORY.filter(item => item.id === id);
    console.log(categories, id)
    if (categories.length) {
        return categories[0];
    }
    return null
}



const StatementCard = ({ item }: { item: ExpenseIncomeType }) => {
    const category = getCategory(item.categoryId);
    return (
        <TouchableHighlight style={{ paddingBottom: 20 }} onPress={() => console.log('Hello World')}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    height: 60,
                    width: 60,
                    backgroundColor: 'yellow',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 15,
                    borderRadius: 20,

                }}>
                    <Ionicons name={category?.icon} size={30} color={'white'} />
                </View>

                <View style={{ flex: 1, marginRight: 30 }}>
                    <Text ellipsizeMode="tail" numberOfLines={1} style={{ fontSize: 18 }}>{item.comment}</Text>
                    <Text style={{ marginTop: 3, color: 'grey' }}>{category?.name}</Text>
                </View>

                <View>
                    <Text style={{ fontSize: 18 }}>-₱{item.amount}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const ExpensesScreen = () => {
    const { user } = useContext(AuthContext);


    const expenses: ExpenseIncomeType[] = [{
        id: '1',
        amount: 153.00,
        comment: "Jojo's Food Garage Hamburger with Chads",
        categoryId: 1,
        date: new Date()
    }, {
        id: '2',
        amount: 362.50,
        comment: "Gilmore to Home Grab",
        categoryId: 2,
        date: new Date()
    }, {
        id: '3',
        amount: 420,
        comment: "Penshopee Shirt",
        categoryId: 2,
        date: new Date()
    }];
    return (
        <View style={{ ...utilStyle.container, paddingTop: 60 }}>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 30 }}>Hello,</Text>
                <Text style={{ fontSize: 36, fontWeight: 'bold' }}>{user?.fullname}</Text>
            </View>

            <View style={{ backgroundColor: 'yellow', borderRadius: 15, padding: 20, marginTop: 10 }}>
                <Text>Spendings</Text>

                <Text><Text style={{ fontSize: 16, marginBottom: 5 }}>$</Text>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>12,560.00</Text>
                </Text>
            </View>

            <FlatList contentContainerStyle={{ paddingVertical: 20 }} data={expenses} renderItem={({ item }) => <StatementCard item={item} />} keyExtractor={item => item.id!} />
        </View>
    )
}

export default ExpensesScreen

const styles = StyleSheet.create({})
