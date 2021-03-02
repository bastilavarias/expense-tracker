import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import AuthStacks from './stacks/AuthStacks';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStacks />
    </NavigationContainer>
  );
}