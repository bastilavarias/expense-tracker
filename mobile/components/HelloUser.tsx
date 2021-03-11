import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../provider/AuthProvider';

const HelloUser = () => {
    const { user } = useContext(AuthContext);

    return (
        <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 30 }}>Hello,</Text>
            <Text style={{ fontSize: 36, fontWeight: 'bold' }}>{user?.fullname}</Text>
        </View>
    )
}

export default HelloUser

const styles = StyleSheet.create({})
