import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import VariantButton from "../../Components/Buttons/Variant";
import Statusbar from "../../Components/StatusBar";
import Nav from "../../Components/NavBar";
import { styles } from "./styles";

const Garages = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Statusbar />
      <Nav onPress={() => navigation.navigate("Home")} />
      <View style={styles.container}>
        <View style={styles.buttonArea}>
          <VariantButton
            text={"Meus \n serviços"}
            onPress={() => navigation.navigate("MyServices")}
          />

          <VariantButton
            text={"Cadastro \n de serviços"}
            onPress={() => navigation.navigate("AddServices")}
          />

          <VariantButton
            text={"Meus \n anúncios"}
            onPress={() => navigation.navigate("MyAdds")}
          />

          <VariantButton
            text={"Cadastro \n de anúncios"}
            onPress={() => navigation.navigate("RegisterAd")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Garages;
