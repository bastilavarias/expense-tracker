import React from 'react'
import { GestureResponderEvent, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { buttonStyle } from '../styles'
import { Ionicons } from '@expo/vector-icons'

interface Props {
    onPress: (event: GestureResponderEvent) => void
    iconName: any
}

const FloatingButton: React.FC<Props> = ({ onPress, iconName }) => {
    return (
        <TouchableHighlight style={buttonStyle.floatingButton}>
            <View>
                <Ionicons name={iconName} size={40} color={'white'} />
            </View>
        </TouchableHighlight>
    )
}



export default FloatingButton

const styles = StyleSheet.create({})
