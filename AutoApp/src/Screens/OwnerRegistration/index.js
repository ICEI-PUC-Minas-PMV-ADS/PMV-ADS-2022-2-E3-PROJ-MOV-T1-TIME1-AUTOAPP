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
import { styles } from "./style";

import logo from "../../../assets/images/logo2.png";

const form = {
  name: "",
  email: "",
  cell: "",
  document: "",
  password: "",
  confirmedPassword: "",
};

const OwnerRegistration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [text, setText] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" translucent />

        <Image source={logo} style={styles.logo} />

        <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
          placeholder="Nome Completo"
          onChangeText={(name) => setName(name)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Telefone"
          value={cell}
          autoCorrect={false}
          onChangeText={(cell) => setCell(cell)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="CPF"
          value={document}
          autoCorrect={false}
          onChangeText={(document) => setDocument(document)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Senha"
          value={password}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Confirmar a Senha"
          secureTextEntry={true}
          value="confirmedPassword"
          onChangeText={(confirmedPassword) =>
            setConfirmedPassword(confirmedPassword)
          }
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TouchableOpacity>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            <Text>Cadastrar</Text>
          </Button>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default OwnerRegistration;
