import React from 'react'
import {Text,StyleSheet, View, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        { name : '#Friend 1', age : 20},
        { name : '#Friend 2', age : 20},
        { name : '#Friend 3', age : 20},
        { name : '#Friend 4', age : 20},
        { name : '#Friend 6', age : 20},
        { name : '#Friend 1', age : 20},
        { name : '#Friend 2', age : 20},
        { name : '#Friend 3', age : 20},
        { name : '#Friend 4', age : 20},
        { name : '#Friend 6', age : 20},
    ]
    return (
        <View>
            <Text style = { styles.textStyle }> ListScreen Array</Text>
            <FlatList
                data = {friends}
                renderItem={(element)=>{
                    return (<Text style={styles.textStyle} >
                        {element.item.name} ---- Age  : 
                        {element.item.age}
                    </Text>)
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50
    }
})

export default ListScreen;