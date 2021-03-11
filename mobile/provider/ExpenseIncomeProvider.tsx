import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';



export const ExpenseIncomeContext = createContext<{
    statement: StatementType,
    addExpense: (expense: ExpenseIncomeType) => void,
    addIncome: (income: ExpenseIncomeType) => void,
    addCategory: (category: CategoryType) => void,
    fetchIncomeExpenses: () => void
}>({
    statement: { incomes: 0, expenses: 0, balance: 0 },
    addIncome: () => { },
    addExpense: () => { },
    addCategory: () => { },
    fetchIncomeExpenses: () => { }
})

type ExpenseIncomeProviderProps = {
    children: any
}

export type ExpenseIncomeType = {
    id?: string,
    amount: number,
    categoryId: number | null,
    date: Date,
    comment: string
}

type ExpenseCategoryNo = 1;
type IncomeCategoryNo = 1;

export type CategoryType = {
    id?: string,
    name: string,
    iconsId: number,
    colorHex: string
    type: ExpenseCategoryNo | IncomeCategoryNo
}

export type StatementType = {
    incomes: Number,
    expenses: Number,
    balance: Number
}

const ExpenseIncomeProvider = ({ children }: ExpenseIncomeProviderProps) => {
    const [statement, setStatement] = useState<StatementType>({ incomes: 0, expenses: 0, balance: 0 })
    const [expenses, setExpenses] = useState<ExpenseIncomeType[]>([])
    const [incomes, setIncomes] = useState<ExpenseIncomeType[]>([])
    const [categories, setCategories] = useState<CategoryType[]>([]);

    const uuid = () => uuidv4();

    const addExpense = async (expense: ExpenseIncomeType) => {
        const id = uuid();
        setExpenses(prevExpenses => [{ id, ...expense }, ...prevExpenses]);
        saveExpenses();
        computeStatement();
    }

    const addIncome = async (income: ExpenseIncomeType) => {
        const id = uuid();
        setIncomes(prevIncomes => [{ id, ...income }, ...prevIncomes])
        saveIncomes();
        computeStatement();
    }

    const addCategory = async (category: CategoryType) => {
        const id = uuid();
        setCategories(prevCategories => [{ id, ...category }, ...prevCategories])
        saveCategories();
    }

    const computeIncomes = () => {
        let value = 0;
        console.log('Computeing Incomes ================')

        console.log(incomes.toString())
        incomes.forEach(item => {
            value += item.amount
        })

        return value;
    }

    const computeExpenses = () => {
        let value = 0;
        console.log('Computeing Expenses ================')

        console.log(expenses.toString())
        expenses.forEach(item => {
            value += item.amount
        })

        return value;
    }

    const computeBalance = () => {
        return computeExpenses() - computeIncomes();
    }

    const computeStatement = () => {
        setStatement({
            incomes: computeIncomes(),
            expenses: computeExpenses(),
            balance: computeBalance()
        })


    }

    const fetchIncomeExpenses = async () => {
        console.clear()
        console.log('Fetching user income');
        const prevIncomes = await AsyncStorage.getItem('incomes');
        const prevExpenses = await AsyncStorage.getItem('expenses');

        console.log('Logging from cache', prevIncomes, prevExpenses)

        if (prevIncomes) setIncomes(values => JSON.parse(prevIncomes));
        if (prevExpenses) setExpenses(values => JSON.parse(prevExpenses));

        console.log('Computing Statements ===============')
        await computeStatement();
    }

    const saveExpenses = async () => {
        console.log('Saving expenses: ', expenses);
        await AsyncStorage.setItem('expenses', JSON.stringify(expenses))
    }

    const saveCategories = async () => {
        console.log('Saving category: ', categories);
        await AsyncStorage.setItem('categories', JSON.stringify(categories))
    }
    const saveIncomes = async () => {
        console.log('Saving incomes: ', incomes);
        await AsyncStorage.setItem('incomes', JSON.stringify(incomes))
    }

    return <ExpenseIncomeContext.Provider value={{
        statement,
        addExpense,
        addIncome,
        addCategory,
        fetchIncomeExpenses
    }}>
        {children}
    </ExpenseIncomeContext.Provider>
}


export default ExpenseIncomeProvider