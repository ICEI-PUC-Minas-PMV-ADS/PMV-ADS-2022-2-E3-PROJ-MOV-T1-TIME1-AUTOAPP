import { useState } from "react";
import {
  View,
  ScrollView,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from '../../Components/StatusBar'
import { styles } from "./style";


const form = {
  name: "",
  email: "",
  cell: "",
  document: "",
  password: "",
  confirmedPassword: "",
};

const PersonalInformation = () => {
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
        <Statusbar />

        <Logo />
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

        <DefaultButton text={"Cadastrar"} />
      </View>
    </ScrollView>
  );
};

export default PersonalInformation;
