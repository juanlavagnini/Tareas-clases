import { Pressable, Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";

function Contador(){
    const [contador, setContador] = useState(0);
    const incremetar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);
  
    return (
      <View>
        <Text>Contador: {contador}</Text>
        <Pressable style={styles.button} onPress={incremetar}> 
          <Text style={styles.text}>Incrementar</Text> 
        </Pressable>
        <Pressable style={styles.button2} onPress={decrementar}> 
          <Text style={styles.text2}>Decrementar</Text> 
        </Pressable>
      </View> 
    );
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'blue',
      margin: 10,
    },
    button2: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'yellow',
      margin: 10,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'yellow',
    },
    text2: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'blue',
    },
});

export default Contador;