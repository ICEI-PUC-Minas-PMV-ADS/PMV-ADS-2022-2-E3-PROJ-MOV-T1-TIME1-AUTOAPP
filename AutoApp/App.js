import { View } from "react-native";
import Login from "../AutoApp/src/Screens/Login";
import ChooseProfile from "../AutoApp/src/Screens/ChooseProfile";
import OwnerRegistration from "../AutoApp/src/Screens/OwnerRegistration";
import GarageRegistration from "../AutoApp/src/Screens/GarageRegistration";
import Home from "../AutoApp/src/Screens/Home";
import MyVehicles from "./src/Screens/MyVehicles";
import MyMaintenances from "./src/Screens/MyMaintenances";
import Publicity from "./src/Screens/Publicity";
import Services from "./src/Screens/Services";


export default function App() {
  return (
    <View>
      {/*Para visualizar as telas desenvolvidas, basta trocar o nome a seguir. Ex: <Login />, <Home />, etc. e rodar o comando npm start para abrir o QR code do Expo Go*/}
      <Login/>
    </View>
  );
}
