import { View } from "react-native";
import Login from "../AutoApp/src/Screens/Login";
import ChooseProfile from "../AutoApp/src/Screens/ChooseProfile";
import OwnerRegistration from "../AutoApp/src/Screens/OwnerRegistration";
import GarageRegistration from "../AutoApp/src/Screens/GarageRegistration";
import Home from "../AutoApp/src/Screens/Home";
import Owners from "./src/Screens/ForOwners";

export default function App() {
  return (
    <View>
      {/*Para visualizar as telas desenvolvidas, basta trocar o nome a seguir. Ex: <Login />, <Home />, etc. e rodar o comando npm start para abrir o QR code do Expo Go*/}
      <Owners/>
    </View>
  );
}
