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
import { styles } from "../CadastroOfic/style";

import logo from "../../../assets/images/logo2.png";
/* import return_img from "../../../assets/images/ret.png"; */

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
    confirmedPassword: ""
}


  const CadastroOficina = () => {
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
  const [text, setText] = useState("");

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" translucent />

        <Image source={logo} style={styles.logo} />

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
          onChangeText={(cep) => setName(cep)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

          <TextInput
          style={styles.input}
          label="Cidade"
          value={city}
          placeholder="CEP"
          onChangeText={(city) => setName(city)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />


          <TextInput
          style={styles.input}
          label="Rua"
          value={street}
          placeholder="Rua"
          onChangeText={(street) => setName(street)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />  

          <TextInput
          style={styles.input}
          label="Nº"
          value={number}
          placeholder="Nº"
          onChangeText={(number) => setName(number)}
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
          onChangeText={(confirmedPassword) => setConfirmedPassword(confirmedPassword)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <TouchableOpacity>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => console.log("Pressed")}>
            <Text>Cadastrar</Text>
          </Button>
        </TouchableOpacity>

        
      </View>
    </ScrollView>
  );
};

export default CadastroOficina;