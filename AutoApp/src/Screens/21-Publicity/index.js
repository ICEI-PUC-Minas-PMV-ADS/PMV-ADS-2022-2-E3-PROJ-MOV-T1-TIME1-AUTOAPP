import { ScrollView, View } from "react-native";
import NavBar from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";

const Publicity = () => {
  return (
    <ScrollView>
      <NavBar />
      <View style={styles.container}>
        <List
          source={require("../../../assets/images/tools.png")}
          text="Anúncio 1"
        />

        <List
          source={require("../../../assets/images/tools.png")}
          text="Anúncio 2"
        />

        <List
          source={require("../../../assets/images/tools.png")}
          text="Anúncio 3"
        />
        <DefaultButton text="Adicionar anúncio" />
      </View>
    </ScrollView>
  );
};

export default Publicity;
