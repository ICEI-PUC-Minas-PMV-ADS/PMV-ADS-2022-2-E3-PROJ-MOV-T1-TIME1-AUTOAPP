import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Main from "./src/Routes/MainNavigation";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#ffffff",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Main />
    </NavigationContainer>
  );
}