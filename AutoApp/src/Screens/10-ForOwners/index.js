import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import VariantButton from "../../Components/Buttons/Variant";
import Statusbar from "../../Components/StatusBar";
import Nav from "../../Components/NavBar";
import { styles } from "./styles";

const Owners = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Statusbar />
      <Nav />
      <View style={styles.container}>
        <View style={styles.buttonArea}>
          <VariantButton
            text={"Meus automóveis"}
            onPress={() => navigation.navigate("MyVehicles")}
          />

          <VariantButton
            text={"Cadastro de automóveis"}
            onPress={() => navigation.navigate("AddAutos")}
          />

          <VariantButton
            text={"Minhas manutenções"}
            onPress={() => navigation.navigate("MyMaintenances")}
          />

          <VariantButton
            text={"Cadastro de manutenção"}
            onPress={() => navigation.navigate("AddMaintenance")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Owners;
