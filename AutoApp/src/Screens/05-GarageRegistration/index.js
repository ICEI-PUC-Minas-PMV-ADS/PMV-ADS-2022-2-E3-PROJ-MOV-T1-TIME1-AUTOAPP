import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import Nav from "../../Components/NavBar";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./style";

import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();

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
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='user_auto_app'",
        [],
        function (tx, res) {
          console.log("item:", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS user_auto_app", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS user_auto_app(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), email VARCHAR(255), cell VARCHAR(255), document VARCHAR(255), password VARCHAR(255), confirmed_password VARCHAR(255), type VARCHAR(255))",
              []
            );
          }
        }
      );
    });
  }, []);

  const navigation = useNavigation();
  const type = "2";
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

  let registerOwner = () => {
    console.log(
      "registerOwner: ",
      name,
      emailofic,
      cell,
      documentofic,
      password,
      confirmedPassword
    );
    db.transaction(function (tx) {
      console.log("init db.transaction - registerOwner");
      try {
        tx.executeSql(
          "INSERT INTO user_auto_app ( name , email , cell , document , password , confirmed_password) VALUES (?,?,?,?,?,?)",
          [name, emailofic, cell, documentofic, password, confirmedPassword],
          (tx, results) => {
            console.log("Results", results.rowsAffected);
            console.log(results);

            if (results.rowsAffected > 0) {
              alert("Usuário Registrado!");
              let currentUser = results.rows.item(0);
              navigation.navigate("Login", {});
            } else alert("Erro ao tentar Registrar o Usuário!!!");
          }
        );
      } catch (err) {
        console.log(err);
      }
    });
  };

  return (
    <ScrollView>
      <Statusbar />
      <Nav onPress={() => navigation.navigate("ChooseProfile")} />
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

        <DefaultButton text={"Cadastrar"} onPress={registerOwner} />
      </View>
    </ScrollView>
  );
};

export default GarageRegistration;
