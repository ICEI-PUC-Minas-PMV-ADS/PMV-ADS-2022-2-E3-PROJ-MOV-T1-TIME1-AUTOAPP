import { ScrollView, View } from "react-native";
import NavBar from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";

const MyMaintenances = () => {
  return (
    <ScrollView>
      <NavBar />
      <View style={styles.container}>
        <List
          source={require("../../../assets/images/pulse.png")}
          text="Troca de óleo"
        />

        <List
          source={require("../../../assets/images/car.png")}
          text="Filtro de ar"
        />
        <DefaultButton text="Adicionar manutenção" />
      </View>
    </ScrollView>
  );
};

export default MyMaintenances;
