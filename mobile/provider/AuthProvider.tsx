import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RegisterCredentials } from '../screens/RegisterScreen';
import { LoginCredentials } from '../screens/LoginScreen';


export const AuthContext = createContext<{
    user: RegisterCredentials | null,
    onLogin: (user: LoginCredentials) => void
    onLogout: () => void
}>({
    user: null,
    onLogin: () => { },
    onLogout: () => { }
});

interface AuthProviderProps {
    children: any
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<RegisterCredentials | null>(null);


    const onLogin = ({ password, username }: LoginCredentials) => {
        const loggedUser = {
            password: 'dev123',
            username: 'topzdev',
            fullname: 'Christian Lugod'
        }


        if (username === 'topzdev' && password === 'dev123') {
            AsyncStorage.setItem('user', JSON.stringify(loggedUser)).then(() => {
                setUser(loggedUser);
            })
        }

    }

    return (
        <AuthContext.Provider value={{
            user,
            onLogin,
            onLogout: async () => {
                await AsyncStorage.removeItem('user')
                setUser(null)
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthProvider