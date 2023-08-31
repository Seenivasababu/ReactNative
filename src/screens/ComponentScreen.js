import React from 'react'
import {Text,StyleSheet, View} from 'react-native'

const ComponentScreen = () => {
    const greetings = "Hi"
    return (
        <View>
            <Text style = {styles.textStyle}>
                I will promise that I will finish this course before monday morning
            </Text>
            <Text style = {styles.subHeader}> {greetings}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 45
    },
    subHeader : {
        fontSize : 30
    }
})

export default ComponentScreen;