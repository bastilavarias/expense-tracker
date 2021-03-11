import React, { useContext, useState, useEffect } from 'react'
import AuthStacks from './stacks/AuthStacks';
import AppStacks from './stacks/AppStacts';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenParamList } from './screens/ScreenParamList';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './provider/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Linking, Platform, Text } from 'react-native';
import Center from './components/Center';
import { ExpenseIncomeContext } from './provider/ExpenseIncomeProvider';
import AppDrawer from './drawers/AppDrawer';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const Stack = createStackNavigator<ScreenParamList>();

export default function Routes() {
    const { user } = useContext(AuthContext);
    // const { fetchIncomeExpenses } = useContext(ExpenseIncomeContext);
    const [loading, setLoading] = useState(true);
    const [isReady, setIsReady] = useState(__DEV__ ? false : true);
    const [initialState, setInitialState] = useState();

    useEffect(() => {
        const restoreState = async () => {
            try {
                const initialUrl = await Linking.getInitialURL();

                if (Platform.OS !== 'web' && initialUrl == null) {
                    // Only restore state if there's no deep link and we're not on web
                    const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
                    const state = savedStateString ? JSON.parse(savedStateString) : undefined;

                    if (state !== undefined) {
                        setInitialState(state);
                    }
                }
            } finally {
                setIsReady(true);
            }
        };

        if (!isReady) {
            restoreState();
        }
    }, [isReady]);

    useEffect(() => {
        AsyncStorage.getItem('user').then(userString => {
            if (userString) {
                setLoading(false)
            } else {
                setLoading(false)
            }
        });
    }, [])


    if (loading && !isReady) {
        return (
            <Center>
                <ActivityIndicator size="large" color="red" />
                <Text>Loading</Text>
            </Center>
        )
    }


    return (
        <NavigationContainer
            initialState={initialState}
            onStateChange={(state) =>
                AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
            }>
            {true ? <AppDrawer /> : <AuthStacks />}

        </NavigationContainer>
    )

};

