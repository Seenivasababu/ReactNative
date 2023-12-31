import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10

const reducer = (state,action) => {
    switch (action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0
            ? state : {...state, red: state.red + action.amount}
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0
            ? state : {...state, green: state.green + action.amount}
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0
            ? state : {...state, blue: state.blue + action.amount}
        default:
            return state
    }
}

const SquareScreenWithUseReducer = () =>{

    const [state,dispatch] = useReducer(reducer, {red: 0, green:0, blue:0})
    const {red, green, blue} = state
    

    return (
        <View>
            <ColorCounter color="Red"
                onIncrease = {()=> dispatch({colorToChange : 'red',amount: COLOR_INCREMENT})}
                onDecrease = {()=> dispatch({colorToChange : 'red',amount: -1* COLOR_INCREMENT})}
            />
            <ColorCounter color="Green"
                onIncrease = {()=> dispatch({colorToChange : 'green',amount: COLOR_INCREMENT})}
                onDecrease = {()=> dispatch({colorToChange : 'green',amount: -1* COLOR_INCREMENT})}
            />
            <ColorCounter color='Blue' 
                onIncrease = {()=> dispatch({colorToChange : 'blue',amount: COLOR_INCREMENT})}
                onDecrease = {()=> dispatch({colorToChange : 'blue',amount: -1* COLOR_INCREMENT})}
            />
           

            <View style={{ height:100, width:100, backgroundColor: `rgb(${red},${green},${blue})` }}/>
        </View>
    )
}

export default SquareScreenWithUseReducer;