import { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView } from "react-native";
import { TextInput } from "react-native-paper";
import Nav from "../../Components/NavBar";
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
  cell: "",
  document: "",
  password: "",
  confirmedPassword: "",
};

const GarageRegistration = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [emailofic, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [documentofic, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  return (
    <ScrollView>
      <Statusbar />
      <Nav onPress={() => navigation.navigate("ChooseProfile")}/>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          label="Nome Fantasia"
          value={name}
          onChangeText={(name) => setName(name)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="CEP"
          value={cep}
          onChangeText={(cep) => setCep(cep)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Cidade"
          value={city}
          onChangeText={(city) => setCity(city)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Rua"
          value={street}
          onChangeText={(street) => setStreet(street)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="Nº"
          value={number}
          onChangeText={(number) => setNumber(number)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TextInput
          style={styles.input}
          label="E-mail Oficina"
          value={emailofic}
          onChangeText={(emailofic) => setEmail(emailofic)}
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
