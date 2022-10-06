import { StatusBar, View, Image, ScrollView, TouchableOpacity, Text  } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./styles";

import Carousel from "../../Components/Carousel"

import logo from "../../../assets/images/logo2.png";

const Home = () => {
  return (
    <ScrollView style={{marginTop: 18}}>
        <View style={styles.container}>
        <StatusBar backgroundColor="#000000" translucent />
        <Image source={logo} style={styles.logo} />

        <Carousel />

        <TouchableOpacity style={styles.buttonArea}>
          <Button
            mode="contained"
            onPress={() => console.log("Botão 'meu perfil' clicado")}
            style={styles.button}
          >
            <Text style={styles.text}>Meu perfil</Text>
          </Button>

          <Button
            mode="contained"
            onPress={() => console.log("Botão 'buscar serviços' clicado")}
            style={styles.button}
          >
            <Text>Buscar serviços</Text>
          </Button>

          <Button
            mode="contained"
            onPress={() => console.log("Botão para proprietários' clicado")}
            style={styles.button}
          >
            <Text>Para proprietários</Text>
          </Button>

          <Button
            mode="contained"
            onPress={() => console.log("Botão 'para mecânicos' clicado")}
            style={styles.button}
          >
            <Text>Para mecânicos</Text>
          </Button>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

export default Home;
