import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from './ScreenParamList';

export default function RegisterScreen({ navigation }: ScreenProps<"Register">) {
    return (
        <View style={styles.container}>
            <Text style={styles.button}>Sign Up Page</Text>
            <Button title="No Account yet? Sign me up!" onPress={() => navigation.navigate('Login')} />
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
