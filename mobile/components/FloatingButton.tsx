import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacityProps, View, TouchableOpacity } from 'react-native'
import { buttonStyle } from '../styles'

interface Props extends TouchableOpacityProps {
    iconName: any
};

const FloatingButton: React.FC<Props> = (props) => {
    const { iconName } = props;
    return (
        <TouchableOpacity {...props} style={buttonStyle.floatingButton}>
            <View>
                <Ionicons name={iconName} size={40} color={'white'} />
            </View>
        </TouchableOpacity>
    )
}



export default FloatingButton

const styles = StyleSheet.create({})
