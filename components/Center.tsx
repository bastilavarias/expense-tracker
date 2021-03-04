import React from 'react'
import { View, Text } from 'react-native'
import { utilStyle } from '../styles'

export default function Center({ children }: any) {
    return (
        <View style={utilStyle.center}>{children}</View>
    )
}
