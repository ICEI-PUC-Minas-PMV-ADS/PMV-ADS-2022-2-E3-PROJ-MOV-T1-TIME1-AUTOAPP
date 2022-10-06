import React from "react";
import { useState } from "react";
import {
  StatusBar,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "./styles";

import logo from "../../../assets/images/logo2.png";

const Login = () => {
  const [text, setText] = React.useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" translucent />
        <Image source={logo} style={styles.logo} />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={text}
          autoCorrect={false}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Senha"
          secureTextEntry={true}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />
        <TouchableOpacity style={styles.password}>
          <Text style={styles.password}> Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            <Text>Login</Text>
          </Button>
        </TouchableOpacity>

        <TouchableOpacity style={styles.register}>
          <Text> Não tem cadastro? </Text>
          <Text style={styles.registerText}>Registre-se!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
