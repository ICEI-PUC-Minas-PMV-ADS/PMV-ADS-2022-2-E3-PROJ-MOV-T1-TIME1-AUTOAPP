import { ScrollView, View } from "react-native";
<<<<<<< HEAD:AutoApp/src/Screens/21-Publicity/index.js
import NavBar from "../../Components/NavBar/index";
=======
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";
>>>>>>> cabc3fc... Ajuste nas rotas:AutoApp/src/Screens/21-MyAdds/index.js
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";

const Publicity = () => {
  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("Garages")} />
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
