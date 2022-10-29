import { useState } from "react";
import {
  View,
  ScrollView,
} from "react-native";
import { TextInput} from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from '../../Components/StatusBar';
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar"
import { styles } from "./style";

const form = {
  name: "",
  email: "",
  cell: "",
  document: "",
};

const ModalMyServices = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [document, setDocument] = useState("");

  return (
    <ScrollView>
      <Statusbar />
      <Nav/>
      <View style={styles.container}>       
        
        <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
          onChangeText={(name) => setName(name)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline"/>}
        />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline"/>}
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
          right={<TextInput.Icon icon="square-edit-outline"/>}  
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
          right={<TextInput.Icon icon="square-edit-outline"/>}
        />
      
        <DefaultButton text={"Alterar dados"} />
        <CancelButton text={"Sair da conta"} />
       
      </View>
    </ScrollView>
  );
};

export default ModalMyServices;
