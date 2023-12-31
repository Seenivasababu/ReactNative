import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state,action) => {
    switch(action.type){
        case 'Increment':
            return {counter : state.counter + action.payload}
        case 'Decrement':
            return {counter : state.counter - action.payload}
        default:
            return state;

    }
}

const CounterScreen = () =>{
    const [state,dispatch] = useReducer(reducer,{ counter : 0})
    return (
        <View>
            <Button title="Increase" onPress={()=>dispatch({type:'Increment', payload : 1})}/>
            <Button title="Decrease" onPress={()=>dispatch({type:'Decrement', payload : 1})}/>
            <Text>
                Current count : {state.counter}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})
export default CounterScreen