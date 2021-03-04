import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { TextInput, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { onChange } from 'react-native-reanimated';
import { utilStyle, formStyle, inputStyle, buttonStyle } from '../styles';
import { ScreenProps } from './ScreenParamList';
import { LoginCredentials } from './LoginScreen'

export interface RegisterCredentials extends LoginCredentials {
    fullname: string
}

export default function RegisterScreen({ navigation }: ScreenProps<"Register">) {
    const [credentials, setCredential] = useState<RegisterCredentials>({
        username: '',
        fullname: '',
        password: ''
    })

    const onChange = (prop: keyof RegisterCredentials, value: string) => {
        setCredential(prevValue => ({ ...prevValue, [prop]: value }))
    }


    const onRegister = () => {
        const { username, fullname, password } = credentials
        if (username && fullname && password) {
            Alert.alert('Register Success', 'Account created')
        } else {
            Alert.alert('Register Error', 'Invalid inputs')
        }
    }

    return (
        <View style={{ ...utilStyle.container, ...utilStyle.center }}>
            <Text style={{ ...utilStyle.h1, ...utilStyle.mb1 }}>Sign Up</Text>

            <View style={formStyle.formGroup}>
                <TextInput style={inputStyle.primaryInput} value={credentials.fullname} placeholder="Enter your fullname here" onChangeText={text => onChange('fullname', text)} />
            </View>
            <View style={formStyle.formGroup}>
                <TextInput style={inputStyle.primaryInput} value={credentials.username} placeholder="Enter your username here" onChangeText={text => onChange('username', text)} />
            </View>
            <View style={formStyle.formGroup}>
                <TextInput secureTextEntry={true} textContentType="password" autoCompleteType="password" style={inputStyle.primaryInput} value={credentials.password} placeholder="Enter your password here" onChangeText={text => onChange('password', text)} />
            </View>
            <View style={formStyle.formGroup}>
                <TouchableHighlight style={buttonStyle.primaryButton} onPress={onRegister}>
                    <Text>Create Account</Text>
                </TouchableHighlight>
            </View>
            <View style={formStyle.formGroup}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
                    <Text style={utilStyle.link}>Have account? Click here to sign in</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

