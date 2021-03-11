import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { utilStyle } from '../styles'

const Container = (props: any) => {
    return (
        <View  {...props} style={{ ...utilStyle.container, ...props.style }} >
            {props.children}
        </View>
    )
}

export default Container

const styles = StyleSheet.create({})
