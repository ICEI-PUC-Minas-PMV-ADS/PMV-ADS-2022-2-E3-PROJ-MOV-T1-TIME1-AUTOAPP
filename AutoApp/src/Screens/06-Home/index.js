import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "../../Components/Carousel";
import Logo from "../../Components/Logo";
import VariantButton from "../../Components/Buttons/Variant";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";
let userId = 0;
const currentUser = {
  userId: "",
  name: "",
  email: "",
  cell: "",
  document: "",
};


import { DatabaseConnection } from '../../Database/connection';
const db = DatabaseConnection.getConnection();


const Home = ({ route }) => {
  const navigation = useNavigation();

  try{
    let current = route.params
    currentUser.userId = current.userId
    currentUser.name = current.name
    currentUser.email = current.email
    currentUser.document = current.document
    currentUser.cell = current.cell
    
    console.log(currentUser)

    
  }catch(err){
    console.log(err)
  }

  return (
    <ScrollView>
      <Statusbar />

      <View style={styles.container}>
        <Logo />
        <Carousel />

        <View style={styles.buttonArea}>
          <VariantButton
            text={"Meu \n perfil"}
            onPress={() => navigation.navigate("PersonalInformation", {currentUser})}
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
