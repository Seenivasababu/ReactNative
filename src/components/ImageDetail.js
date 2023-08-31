import React from 'react'
import {Text, StyleSheet, View, Image} from 'react-native'

const ImageDetail= (props) =>{
    console.log(props);
    return (
        <View>
            <Image source={props.imageSrc}/>
            <Text >{props.title}</Text>
            <Text >Image score - {props.score}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    textSize : {
        fontSize : 30
    }
})

export default ImageDetail;