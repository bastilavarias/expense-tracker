import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RegisterCredentials } from '../screens/RegisterScreen';


export const AuthContenxt = createContext<{
    user: RegisterCredentials | null,
    login: () => void
    logout: () => void
}>({
    user: null,
    login: () => { },
    logout: () => { }
});

interface AuthProviderProps {
    children: any
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<RegisterCredentials | null>(null);

    return (
        <AuthContenxt.Provider value={{
            user,
            login: async () => {
                setUser({
                    password: 'dev123',
                    username: 'topzdev',
                    fullname: 'Christian Lugod'
                })

                await AsyncStorage.setItem('user', JSON.stringify(user))
            },
            logout: async () => {
                await AsyncStorage.removeItem('user')
            }
        }}>
            {children}
        </AuthContenxt.Provider>
    )
}


export default AuthProvider