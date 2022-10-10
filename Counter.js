import React from 'react'
import { View , Text, StyleSheet} from 'react-native';;
import { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    setInterval(()=>{
        
    },1000)

  return (
    <View>
        <Text style = {styles.text}>
            {props.count}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'red',
      backgroundColor: "yellow",
      borderWidth: 2,
      padding: 2,
      borderColor: 'red',
      borderRadius: 5,
      margin: 2,
    },
    button: {
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 15,
      backgroundColor: "yellow"
    }
  });

export default Counter