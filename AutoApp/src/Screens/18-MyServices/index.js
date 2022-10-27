import { ScrollView, View } from "react-native";
<<<<<<< HEAD
import NavBar from "../../Components/NavBar/index";
=======
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";
>>>>>>> cabc3fc... Ajuste nas rotas
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";

const MyServices = () => {
  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("Garages")} />
      <View style={styles.container}>
        <List 
        source={require("../../../assets/images/tools.png")}
        text="Serviço 1"/>

        <List   
        source={require("../../../assets/images/tools.png")}
        text="Serviço 2"
        />
        <DefaultButton 
        text="Adicionar serviço"
        />
      </View>
    </ScrollView>
  );
};

export default MyServices;
