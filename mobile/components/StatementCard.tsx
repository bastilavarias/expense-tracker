import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { CATEGORY, COLORS } from '../constants';
import { ExpenseIncomeType } from '../provider/ExpenseIncomeProvider';
import { Ionicons } from '@expo/vector-icons'
import { color } from 'react-native-reanimated';

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
        <TouchableHighlight style={{ marginBottom: 10, padding: 5 }} onPress={() => console.log('Hello World')}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{
                    height: 60,
                    width: 60,
                    backgroundColor: COLORS.primaryShade,

                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 15,
                    borderRadius: 20,

                }}>
                    <Ionicons name={category?.icon} size={30} color={COLORS.primary} />
                </View>

                <View style={{ flex: 1, marginRight: 30 }}>
                    <Text ellipsizeMode="tail" numberOfLines={1} style={{ fontSize: 18 }}>{item.comment}</Text>
                    <Text style={{ marginTop: 3, color: COLORS.lightGray }}>{category?.name}</Text>
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>-₱{item.amount}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}
export default StatementCard
