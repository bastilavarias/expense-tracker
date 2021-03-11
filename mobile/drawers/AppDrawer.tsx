import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../constants';
import CategoryModal from '../modals/CategoryModal';
import AddTransactionScreen from '../screens/AddTransactionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { ScreenParamList } from '../screens/ScreenParamList';
import SettingsScreen from '../screens/SettingsScreen';
import HomeTabs from '../tabs/HomeTabs';

const Drawer = createDrawerNavigator<ScreenParamList>();
const Stack = createStackNavigator<ScreenParamList>();

interface AppDrawerProps {

}

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
            <Stack.Screen name="Category" component={CategoryModal} />

        </Stack.Navigator>
    )
}

const AppDrawer: React.FC<AppDrawerProps> = ({ }) => {
    return (
        <Drawer.Navigator screenOptions={{}} drawerContentOptions={{ activeTintColor: COLORS.primary }}>
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}



export default AppDrawer

const styles = StyleSheet.create({})