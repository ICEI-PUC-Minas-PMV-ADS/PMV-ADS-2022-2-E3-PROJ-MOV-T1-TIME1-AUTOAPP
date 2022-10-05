import {Alert, StatusBar, View, Image, ScrollView, TouchableOpacity, Text  } from "react-native";
import {TextInput, Button} from 'react-native-paper';
import { styles } from "./styles";

import logo from "../../../assets/images/logo2.png";

const Login = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" translucent />
        <Image source={logo} style={styles.logo} />

        <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoCorrect={false}
        onChangeText={() => {}}
        mode = "outlined"
        />
         
        <TextInput
        style={styles.input}
        autoCorrect={false}
        secureTextEntry={true}
        placeholder="Senha"
        onChangeText={() => {}}
        mode = "outlined"
        />

       <Text style={styles.senha}> Esqueceu a senha?
       </Text>

        <TouchableOpacity>
        <Button mode="contained" onPress={() => console.log('Pressed')}>  Login </Button>
     
        </TouchableOpacity>

        <Text> Não tem cadasto? <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.registerText}>Registre-se</Text>
          </TouchableOpacity></Text>
       </View>
    </ScrollView>
  );
};

export default Login;