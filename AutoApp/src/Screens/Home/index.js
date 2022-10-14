import { View, ScrollView } from "react-native";
import Carousel from "../../Components/Carousel";
import Logo from "../../Components/Logo";
import VariantButton from "../../Components/Buttons/Variant";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Statusbar />

        <Logo />
        <Carousel />

        <View style={styles.buttonArea}>
          <VariantButton
            text={"Meu perfil"}
            onPress={() => console.log("Botão 'meu perfil' clicado")}
          />

          <VariantButton
            text={"Buscar serviços"}
            onPress={() => console.log("Botão 'buscar serviços' clicado")}
          />

          <VariantButton
            text={"Para proprietários"}
            onPress={() => console.log("Botão 'para proprietários' clicado")}
          />

          <VariantButton
            text={"Para mecânicos"}
            onPress={() => console.log("Botão 'para mecânicos' clicado")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
