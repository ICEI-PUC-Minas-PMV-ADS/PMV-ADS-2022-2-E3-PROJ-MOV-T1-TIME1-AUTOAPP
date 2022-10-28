import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "../../Components/Carousel";
import Logo from "../../Components/Logo";
import VariantButton from "../../Components/Buttons/Variant";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Statusbar />

      <View style={styles.container}>
        <Logo />
        <Carousel />

        <View style={styles.buttonArea}>
          <VariantButton
            text={"Meu \n perfil"}
            onPress={() => navigation.navigate("PersonalInformation")}
          />

          <VariantButton
            text={"Buscar \n serviços"}
            onPress={() => navigation.navigate("")}
          />

          <VariantButton
            text={"Para \n proprietários"}
            onPress={() => navigation.navigate("Owners")}
          />

          <VariantButton
            text={"Para \n mecânicos"}
            onPress={() => navigation.navigate("Garages")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
