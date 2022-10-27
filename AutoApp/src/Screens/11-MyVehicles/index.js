import { ScrollView, View } from "react-native";
import NavBar from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";

const MyVehicles = () => {
  return (
    <ScrollView>
<<<<<<< HEAD
      <NavBar />
=======
       <Nav onPress={() => navigation.navigate("Owners")} />
>>>>>>> cabc3fc... Ajuste nas rotas
      <View style={styles.container}> 
        <List
          source={require("../../../assets/images/pulse.png")}
          text="Pulse"
        />
        
        <List 
        source={require("../../../assets/images/car.png")} 
        text="Argo" />

        <DefaultButton text={"Adicionar veículo"} />
      </View>
    </ScrollView>
  );
};

export default MyVehicles;
