import React, { useContext, useState } from 'react'
import { View, Text, TextInput, TouchableHighlight, Button, Platform, Alert } from 'react-native'
import { ScreenProps } from './ScreenParamList'
import { ExpenseIncomeContext, ExpenseIncomeType } from '../provider/ExpenseIncomeProvider'
import { buttonStyle, formStyle, inputStyle, utilStyle } from '../styles'
import { onChange } from 'react-native-reanimated'
import DateTimePicker from '@react-native-community/datetimepicker';

const AddTransaction = ({ navigation }: ScreenProps<'AddTransaction'>) => {
    const { addExpense } = useContext(ExpenseIncomeContext)
    const [showDate, setShowDate] = useState(false);
    const [expense, setExpense] = useState<ExpenseIncomeType>({
        amount: 200,
        comment: 'Hello World',
        categoryId: 1,
        date: new Date()
    })


    const onChange = (prop: keyof ExpenseIncomeType, value: any) => {
        setExpense(prevValue => ({ ...prevValue, [prop]: value }))
    }

    const onChangeDate = (event: any, selectedDate: any) => {
        setShowDate(false);
        const currentDate = selectedDate || expense.date;
        onChange('date', currentDate)
    }

    const getAmount = () => {
        return expense.amount ? expense.amount.toString() : '';
    }

    const getCategory = () => {
        return expense.categoryId ? expense.categoryId.toString() : '';
    }

    const onAddExpense = () => {
        const { amount, date, categoryId, comment } = expense;
        if (amount && date && categoryId && comment) {
            addExpense(expense);
            navigation.navigate('Home');
        } else {
            Alert.prompt('Empty Fields', 'Some fields are empty')
        }
    }


    return (
        <View style={{ ...utilStyle.container, ...utilStyle.center }}>
            <View style={formStyle.formGroup}>
                <TextInput style={inputStyle.primaryInput} keyboardType="numeric" value={getAmount()} placeholder="Expenses Amount" onChangeText={text => onChange('amount', text)} />
            </View>
            <View style={formStyle.formGroup}>
                <TextInput style={inputStyle.primaryInput} value={getCategory()} placeholder="Select Category" onChangeText={text => onChange('categoryId', text)} />
            </View>
            <View style={formStyle.formGroup}>
                <Button disabled={showDate} onPress={() => setShowDate(true)} title="Set Date" />
            </View>
            <View style={formStyle.formGroup}>
                <TextInput style={inputStyle.primaryInput} value={expense.comment} placeholder="Comment" onChangeText={text => onChange('comment', text)} />
            </View>

            <View style={formStyle.formGroup}>
                <TouchableHighlight style={buttonStyle.primaryButton} onPress={() => { onAddExpense() }}>
                    <Text>Add Expenses</Text>
                </TouchableHighlight>
            </View>
            {showDate ? <DateTimePicker display="default" testID="dateTimePicker" mode="date" value={expense.date} onChange={onChangeDate} /> : null}
        </View>
    )
}

export default AddTransaction
