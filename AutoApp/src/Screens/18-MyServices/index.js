import { ScrollView, View } from "react-native";
import NavBar from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";

const MyServices = () => {
  return (
    <ScrollView>
      <NavBar />
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
