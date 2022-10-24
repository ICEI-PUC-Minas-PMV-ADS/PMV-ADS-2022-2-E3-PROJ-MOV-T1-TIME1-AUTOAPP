import { useState } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Statusbar />
        <Logo />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          autoCorrect={false}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          left={<TextInput.Icon icon="account" />}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          onChangeText={(password) => setPassword(password)}
          label="Senha"
          value={password}
          secureTextEntry={true}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          left={<TextInput.Icon icon="key" />}
        />

        <TouchableOpacity style={styles.password}>
          <Text style={styles.password}> Esqueceu a senha?</Text>
        </TouchableOpacity>

        <DefaultButton 
        text={"Login"} 
        onPress={() => console.log('Pressed')} />

        <TouchableOpacity style={styles.register}>
          <Text> Não tem cadastro? </Text>
          <Text style={styles.registerText}>Registre-se!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
