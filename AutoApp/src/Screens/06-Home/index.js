import { View, ScrollView } from "react-native";
import Carousel from "../../Components/Carousel";
import Nav from "../../Components/NavBar";
import VariantButton from "../../Components/Buttons/Variant";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";

const Home = () => {
  return (
    <ScrollView>
      <Statusbar />
      <Nav />
      <View style={styles.container}>
        <Carousel />

        <View style={styles.buttonArea}>
          <VariantButton
            text={"Meu \n perfil"}
            onPress={() => console.log("Botão 'meu perfil' clicado")}
          />

          <VariantButton
            text={"Buscar \n serviços"}
            onPress={() => console.log("Botão 'buscar serviços' clicado")}
          />

          <VariantButton
            text={"Para \n proprietários"}
            onPress={() => console.log("Botão 'para proprietários' clicado")}
          />

          <VariantButton
            text={"Para \n mecânicos"}
            onPress={() => console.log("Botão 'para mecânicos' clicado")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
