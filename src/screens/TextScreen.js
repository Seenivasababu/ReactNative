import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

const TextScreen = () => {
    const [text,setText] = useState('')
    return (
        <View>
            <TextInput style={styles.input} value={text} onChangeText={(newText)=>setText(newText)}/>
            <Text>Your text is : {text}</Text>
            {text.length < 5 && <Text>Name must contain 5 letter</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        margin :25,
        borderColor: 'black',
        borderWidth : 1
    }
})

export default TextScreen