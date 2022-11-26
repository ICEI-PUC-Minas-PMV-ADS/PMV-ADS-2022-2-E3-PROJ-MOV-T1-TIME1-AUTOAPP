import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from "../../Components/StatusBar";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import { styles } from "./style";

import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();

const currentUser = {
  name: "",
  email: "",
  cell: "",
  document: "",
};

const PersonalInformation = ({ route }) => {
  try {
    let current = route.params.currentUser;
    console.log("router: ", current);

    currentUser.userId = current.userId;
    currentUser.name = current.name;
    currentUser.email = current.email;
    currentUser.document = current.document;
    currentUser.cell = current.cell;
    console.log("PersonalInformation: ", currentUser);
  } catch (err) {
    console.log(err);
  }

  const navigation = useNavigation();
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [cell, setCell] = useState(currentUser.cell);
  const [document, setDocument] = useState(currentUser.document);
  const [id, setUserId] = useState(currentUser.userId);

  let updateUser = () => {
    console.log(name, email, cell, document, id);

    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE user_auto_app set name=?, email=? , cell=?, document=?  WHERE user_id=?",
        [name, email, cell, document, id],
        (tx, results) => {
          let len = results.rowsAffected;

          if (len > 0) {
            alert("Usuário Atualizado!");
            navigation.navigate("Login");
          } else {
            alert("Erro ao atualizar o usuário");
          }
        }
      );
    });
  };

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM user_auto_app where user_id=?",
        [id],
        (tx, results) => {
          let len = results.rowsAffected;
          if (len > 0) {
            alert("Usuário Apagado!");
            navigation.navigate("Login");
          } else alert("Erro ao apagar o usuário");
        }
      );
    });
  };

  return (
    <ScrollView>
      <Statusbar />
      <Nav onPress={() => navigation.navigate("Home")} />

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
          onChangeText={(name) => setName(name)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}
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
          right={<TextInput.Icon icon="square-edit-outline" />}
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
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <DefaultButton text={"Alterar dados"} onPress={updateUser} />

        <DefaultButton text={"Deletar a conta"} onPress={deleteUser} />

        <CancelButton text={"Sair da conta"} />
      </View>
    </ScrollView>
  );
};

export default PersonalInformation;
