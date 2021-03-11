import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants'
import { CategoryType } from '../provider/ExpenseIncomeProvider'
import { Ionicons } from '@expo/vector-icons'

interface CategoryTileProps {
    category: CategoryType, selected: boolean, setSelected: React.Dispatch<React.SetStateAction<CategoryType | null>>
}

const CategoryTile: React.FC<CategoryTileProps> = ({ category, selected, setSelected }) => {

    const backgroundColor = selected ? COLORS.primaryShade : COLORS.lightGrayShade;
    const color = selected ? COLORS.primary : COLORS.white;

    return (<TouchableOpacity style={{
        height: 100,
        width: '23%',
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10,
        marginRight: '2%',
        marginBottom: 10

    }} onPress={() => setSelected(category)}>
        <Ionicons name={category.icon} size={30} color={color} />
        <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 12, color }}>{category.name}</Text>
    </TouchableOpacity>)
}

export default CategoryTile
