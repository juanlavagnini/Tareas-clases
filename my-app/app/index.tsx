import { Text, View } from "react-native";
import {MyButton} from "../components/mybutton";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MyButton text="Button 1" />
      <MyButton text="Button 2" />
      <MyButton text="button 3" />
    </View>
  );
}

