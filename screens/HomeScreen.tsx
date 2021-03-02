import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from './ScreenParamList';

export default function LoginScreen({ navigation, route }: ScreenProps<'Home'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.button}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginBottom: 20
    }
});
