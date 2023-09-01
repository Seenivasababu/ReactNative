import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    viewOneStyle : {
        backgroundColor : 'red',
        width : 100,
        height : 100
    },
    viewTwoStyle : {
        backgroundColor : 'green',
        width : 100,
        height : 100,
        marginTop : 100
    },
    viewThreeStyle : {
        backgroundColor : 'purple',
        width : 100,
        height : 100
    }
})


export default BoxScreen