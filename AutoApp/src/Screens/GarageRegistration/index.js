import { useState } from "react";
import { View, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./style";

const form = {
  name: "",
  cep: "",
  city: "",
  street: "",
  number: "",
  adress: "",
  email: "",
  telofic: "",
  document: "",
  password: "",
  confirmedPassword: "",
};

const GarageRegistration = () => {
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [emailofic, setEmail] = useState("");
  const [telofic, setCell] = useState("");
  const [documentofic, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Statusbar />

        <Logo />

        <TextInput
          style={styles.input}
          label="Nome Fantasia"
          value={name}
          placeholder="Nome Fantasia"
          onChangeText={(name) => setName(name)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="CEP"
          value={cep}
          placeholder="CEP"
          onChangeText={(cep) => setCep(cep)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Cidade"
          value={city}
          placeholder="CEP"
          onChangeText={(city) => setCity(city)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Rua"
          value={street}
          placeholder="Rua"
          onChangeText={(street) => setStreet(street)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Nº"
          value={number}
          placeholder="Nº"
          onChangeText={(number) => setNumber(number)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="E-mail Oficina"
          value={emailofic}
          placeholder="E-mail Oficina"
          onChangeText={(emailofic) => setEmail(emailofic)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Telefone"
          value={telofic}
          placeholder="Telefone"
          autoCorrect={false}
          onChangeText={(telofic) => setCell(telofic)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="CPF ou CNPJ"
          value={documentofic}
          autoCorrect={false}
          onChangeText={(documentofic) => setDocument(documentofic)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          label="Crie uma Senha"
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
          value={confirmedPassword}
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

export default GarageRegistration;
