import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import Home from "./src/Screens/Home";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <View>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </View>
  );
}