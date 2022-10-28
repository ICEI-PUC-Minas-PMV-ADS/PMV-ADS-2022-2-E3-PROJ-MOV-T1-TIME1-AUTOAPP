import { View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native'
import DefaultButton from "../../Components/Buttons/Default";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";

const DataAlteration = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Statusbar />
      <Nav 
      onPress={() => navigation.navigate("PersonalInformation")}/>
      <View style={styles.container}>
        <DefaultButton text={"Salvar"} />
        <CancelButton text={"Cancelar"} />
      </View>
    </ScrollView>
  );
};
export default DataAlteration;
