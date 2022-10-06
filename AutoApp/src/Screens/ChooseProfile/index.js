import { StatusBar, View, Image, ScrollView, TouchableOpacity, Text  } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./styles";

import logo from "../../../assets/images/logo2.png";

const ChooseProfile = () => {
  return (
    <ScrollView style={{marginTop: 18}}>
        <View style={styles.container}>
        <StatusBar backgroundColor="#000000" translucent />
        <Image source={logo} style={styles.logo} />

        <TouchableOpacity style={styles.buttonArea}>
          <Button
            mode="contained"
            onPress={() => console.log("Botão 'meu perfil' clicado")}
            style={styles.button}
          >
            <Text style={styles.text}>Sou Proprietário</Text>
          </Button>

          <Button
            mode="contained"
            onPress={() => console.log("Botão 'buscar serviços' clicado")}
            style={styles.button}
          >
            <Text style={styles.text}>Sou Mecânico</Text>
          </Button>

        </TouchableOpacity>

        <Text style= {styles.texto2}>Já tem cadastro? <Text style= {styles.textoalt}>Faça seu login!</Text></Text>

      </View>
      
    </ScrollView>
  );
};

export default ChooseProfile;
