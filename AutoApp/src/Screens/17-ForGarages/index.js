import { View, ScrollView } from "react-native";
<<<<<<< HEAD
=======
import { useNavigation } from "@react-navigation/native";
>>>>>>> cabc3fc... Ajuste nas rotas
import VariantButton from "../../Components/Buttons/Variant";
import Statusbar from "../../Components/StatusBar";
import Nav from "../../Components/NavBar";
import { styles } from "./styles";

const Garages = () => {
  return (
    <ScrollView>
      <Statusbar />
      <Nav onPress={() => navigation.navigate("Home")} />
      <View style={styles.container}>
        <View style={styles.buttonArea}>
          <VariantButton
            text={"Meus \n serviços"}
            onPress={() => console.log("Botão 'Meus serviços' clicado")}
          />

          <VariantButton
            text={"Cadastro \n de serviços"}
            onPress={() => console.log("Botão 'Cadastro de serviços' clicado")}
          />

          <VariantButton
            text={"Meus \n anúncios"}
            onPress={() => console.log("Botão 'Meus anúncios' clicado")}
          />

          <VariantButton
            text={"Cadastro \n de anúncios"}
            onPress={() => console.log("Botão 'Cadastro de anúncios' clicado")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Garages;
