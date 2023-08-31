import React from 'react'
import {Text, StyleSheet, View} from 'react-native'
import ImageDetail from '../components/ImageDetail'


const ImageScreen = () =>{
    return (
        <View>
            <Text style={styles.textSize}>Image Components</Text>
            <ImageDetail title = "Forest" imageSrc = {require('../../assets/forest.jpg')} score = '9'/>
            <ImageDetail title = "Beach" imageSrc = {require('../../assets/beach.jpg')} score = '8'/>
            <ImageDetail title = "Mountain" imageSrc = {require('../../assets/mountain.jpg')} score = '7'/>
        </View>
    )
}

const styles = StyleSheet.create({
    textSize : {
        fontSize : 30
    }
})

export default ImageScreen