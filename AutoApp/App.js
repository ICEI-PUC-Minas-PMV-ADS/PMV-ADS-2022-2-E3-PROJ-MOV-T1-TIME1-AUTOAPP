import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import ChooseProfile from "./src/Screens/EscolhaPerfil";

export default function App() {
  
  return (
    <View>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <ChooseProfile />
    </View>
  );
}