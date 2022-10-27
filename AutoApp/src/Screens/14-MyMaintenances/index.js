import { ScrollView, View } from "react-native";
<<<<<<< HEAD
import NavBar from "../../Components/NavBar/index";
=======
import { useNavigation } from "@react-navigation/native";
import Nav from "../../Components/NavBar/index";
>>>>>>> cabc3fc... Ajuste nas rotas
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";

const MyMaintenances = () => {
  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("Owners")} />
      <View style={styles.container}>
        <List
          source={require("../../../assets/images/pulse.png")}
          text="Troca de óleo"
<<<<<<< HEAD
=======
          onPress={() => navigation.navigate("")}
>>>>>>> cabc3fc... Ajuste nas rotas
        />

        <List
          source={require("../../../assets/images/car.png")}
          text="Filtro de ar"
<<<<<<< HEAD
=======
          onPress={() => navigation.navigate("")}
        />
        <DefaultButton
          text="Adicionar manutenção"
          onPress={() => navigation.navigate("AddMaintenance")}
>>>>>>> cabc3fc... Ajuste nas rotas
        />
        <DefaultButton text="Adicionar manutenção" />
      </View>
    </ScrollView>
  );
};

export default MyMaintenances;
