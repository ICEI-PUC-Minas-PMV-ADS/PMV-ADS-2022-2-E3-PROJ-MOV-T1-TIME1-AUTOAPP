import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/02-Login";
import ChooseProfile from "../Screens/03-ChooseProfile";
import OwnerRegistration from "../Screens/04-OwnerRegistration";
import GarageRegistration from "../Screens/05-GarageRegistration";
import Home from "../Screens/06-Home";
import PersonalInformation from "../Screens/07-PersonalInformation";
import DataAlteration from "../Screens/08-DataAlteration";
import Owners from "../Screens/10-ForOwners";
import MyVehicles from "../Screens/11-MyVehicles";
import AddAutos from "../Screens/13-AddAutomobiles";
import MyMaintenances from "../Screens/14-MyMaintenances";
import AddMaintenance from "../Screens/16-MaintenancesDone";
import Garages from "../Screens/17-ForGarages";
import MyServices from "../Screens/18-MyServices";
import AddServices from "../Screens/20-RegisterService";
import MyAdds from "../Screens/21-MyAdds";
import RegisterAd from "../Screens/23-RegisterAd";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (


    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="ChooseProfile"
        component={ChooseProfile}
        options={{
          header: () => null,
        }}
      />


      <Stack.Screen
        name="OwnerRegistration"
        component={OwnerRegistration}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="DataAlteration"
        component={DataAlteration}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Owners"
        component={Owners}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="MyVehicles"
        component={MyVehicles}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AddAutos"
        component={AddAutos}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="MyMaintenances"
        component={MyMaintenances}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AddMaintenance"
        component={AddMaintenance}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Garages"
        component={Garages}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="MyServices"
        component={MyServices}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="AddServices"
        component={AddServices}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="MyAdds"
        component={MyAdds}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="RegisterAd"
        component={RegisterAd}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Main;
