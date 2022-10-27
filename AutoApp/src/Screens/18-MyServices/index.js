import { ScrollView, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";

const MyServices = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("Garages")} />
      <View style={styles.container}>
        <List 
        source={require("../../../assets/images/tools.png")}
        text="Serviço 1"
        onPress={() => navigation.navigate('')}
        />

        <List   
        source={require("../../../assets/images/tools.png")}
        text="Serviço 2"
        onPress={() => navigation.navigate('')}
        />
        <DefaultButton 
        text="Adicionar serviço"
        onPress={() => navigation.navigate('AddServices')}
        />
      </View>
    </ScrollView>
  );
};

export default MyServices;
