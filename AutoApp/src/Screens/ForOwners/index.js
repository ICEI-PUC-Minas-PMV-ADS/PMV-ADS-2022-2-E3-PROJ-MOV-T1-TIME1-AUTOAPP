import { View, ScrollView } from "react-native";
import VariantButton from "../../Components/Buttons/Variant";
import Statusbar from "../../Components/StatusBar";
import Nav from "../../Components/NavBar";
import { styles } from "./styles";

const Owners = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Statusbar />
        <Nav />
        <View style={styles.buttonArea}>
          <VariantButton
            text={"Meus automóveis"}
            onPress={() => console.log("Botão 'Meus automóveis' clicado")}
          />

          <VariantButton
            text={"Cadastro de automóveis"}
            onPress={() => console.log("Botão 'Cadastro de automóveis' clicado")}
          />

          <VariantButton
            text={"Minhas manutenções"}
            onPress={() => console.log("Botão 'Minhas manutenções' clicado")}
          />

          <VariantButton
            text={"Cadastro de manutenção"}
            onPress={() => console.log("Botão 'Cadastro de manutenção' clicado")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Owners;
