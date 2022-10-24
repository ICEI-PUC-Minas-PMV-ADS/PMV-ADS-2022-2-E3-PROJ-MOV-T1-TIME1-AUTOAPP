import {
  View,
  ScrollView,
  Text,
} from "react-native";
import Logo from "../../Components/Logo";
import VariantButton from "../../Components/Buttons/Variant";
import Statusbar from '../../Components/StatusBar'
import { styles } from "./styles";

const ChooseProfile = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Statusbar />
        <Logo />

        <View style={styles.buttonArea}>
          <VariantButton
            text={"Sou \n Proprietário"}
            onPress={() => console.log("Botão 'sou proprietário' clicado")}
          />

          <VariantButton
            text={"Sou \n Mecânico"}
            onPress={() => console.log("Botão 'sou mecânico' clicado")}
          />
        </View>

        <Text>
          Já tem cadastro? <Text style={styles.textoalt}>Faça seu login!</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default ChooseProfile;
