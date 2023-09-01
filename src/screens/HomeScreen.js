import React from "react";
import { Text, StyleSheet ,View , Button } from "react-native";

const HomeScreen = (props) => {
 
  return (
    <View>
         <Text >Hi There!!</Text>
         <Button 
            onPress={()=> props.navigation.navigate('Components')}
            title='Go to component demo'
          />
          <Button 
            onPress={()=> props.navigation.navigate('List')}
            title='Go List Component'
          />
          <Button 
            onPress={()=> props.navigation.navigate('Image')}
            title='Go Image Component'
          />
          <Button 
            onPress={()=> props.navigation.navigate('Counter')}
            title='Go Counter Component'
          />
          <Button 
            onPress={()=> props.navigation.navigate('Color')}
            title='Go Color Component'
          />
          <Button 
            onPress={()=> props.navigation.navigate('Square')}
            title='Go Square Component'
          />
          <Button 
            onPress={()=> props.navigation.navigate('Text')}
            title='Go Text Component'
          />
    </View>
    )
};

// const styles = StyleSheet.create({
//   textSize: {
//     fontSize: 30,
//   }
// });

export default HomeScreen;
