import { ScrollView, View } from "react-native";
import { useNavigation } from '@react-navigation/native'
import NavBar from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";

const MyMaintenances = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <NavBar />
      <View style={styles.container}>
        <List
          source={require("../../../assets/images/pulse.png")}
          text="Troca de óleo"
          onPress={() => navigation.navigate('')}
        />

        <List
          source={require("../../../assets/images/car.png")}
          text="Filtro de ar"
          onPress={() => navigation.navigate('')}
        />
        <DefaultButton 
        text="Adicionar manutenção" 
        onPress={() => navigation.navigate('AddMaintenance')}
        />
      </View>
    </ScrollView>
  );
};

export default MyMaintenances;
