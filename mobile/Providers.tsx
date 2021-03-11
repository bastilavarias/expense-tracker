import React from 'react'
import AuthProvider from './provider/AuthProvider';
import ExpenseIncomeProvider from './provider/ExpenseIncomeProvider';
import Routes from './Routes';

interface ProvidesProps {

}

export const Providers: React.FC<ProvidesProps> = ({ }) => {
    return (
        <AuthProvider>
            <ExpenseIncomeProvider>
                <Routes />
            </ExpenseIncomeProvider>
        </AuthProvider>);
}