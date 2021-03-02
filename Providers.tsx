import React from 'react'
import AuthProvider from './provider/AuthProvider';
import Routes from './Routes';

interface ProvidesProps {

}

export const Providers: React.FC<ProvidesProps> = ({ }) => {
    return (<AuthProvider>
        <Routes />
    </AuthProvider>);
}