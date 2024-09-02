import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface MyButtonProps {
  text: string;
}

export const MyButton = (props: MyButtonProps) => {
  const [ispressed, setPressed] = React.useState(false);
  return <Pressable 
  style={[buttonstyles.genericbutton, ispressed ? buttonstyles.pressedbutton : buttonstyles.button]}
  onPressIn={() => setPressed(true)}
  onPressOut={() => setPressed(false)}
  >
    <Text style={ispressed ? buttonstyles.pressedtext : buttonstyles.text}>{props.text}</Text></Pressable>;
}

const buttonstyles = StyleSheet.create({
  genericbutton: {
    padding: 10,
    margin: 10,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'grey'
  },
  pressedbutton: {
    backgroundColor: 'red'
  },
  text:{
    color: 'black'
  },
  pressedtext:{
    color: 'white'
  }
});
