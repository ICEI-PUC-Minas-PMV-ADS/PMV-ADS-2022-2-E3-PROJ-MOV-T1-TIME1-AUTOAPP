import { ScrollView, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";

const MyVehicles = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
       <Nav onPress={() => navigation.navigate("Owners")} />
      <View style={styles.container}> 
        <List
          source={require("../../../assets/images/pulse.png")}
          text="Pulse"
          onPress={() => navigation.navigate('')}
        />
        
        <List 
        source={require("../../../assets/images/car.png")} 
        text="Argo" 
        onPress={() => navigation.navigate('')}
        />

        <DefaultButton 
        text={"Adicionar veículo"} 
        onPress={() => navigation.push('AddAutos')}
        />
      </View>
    </ScrollView>
  );
};

export default MyVehicles;
