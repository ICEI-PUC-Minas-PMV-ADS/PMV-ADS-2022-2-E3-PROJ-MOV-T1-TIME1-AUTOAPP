import { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from "../../Components/StatusBar";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import { styles } from "./style";

import { DatabaseConnection } from '../../Database/connection';
const db = DatabaseConnection.getConnection();

const form = {
  name: "",
  email: "",
  cell: "",
  document: "",
};

const PersonalInformation = () => {
  

    // Mover dps a criacao para o componente principal
    useEffect(() => {
      db.transaction(function (txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='user_auto_app'",
          [],
          function (tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS user_auto_app', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS user_auto_app(user_id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), email VARCHAR(255), cell VARCHAR(255), document VARCHAR(255), password VARCHAR(255), confirmed_password VARCHAR(255))',
                []
              );
            }

          }
        );
      });


      
    }, []);


  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [document, setDocument] = useState("");


  let updateUser = () => {
    console.log(name, email, cell, document);

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set name=?, email=? , cell=?, document=?  where user_id=?',
        [name, email, cell, document, id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Usuário atualizado com sucesso !!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Erro ao atualizar o usuário');
        }
      );
    });
  };

  let deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM user_auto_app where user_id=?',
        [inputUserId],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Usuário Excluído com Sucesso !',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Por favor entre com um código de usuário válido !');
          }
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

        <DefaultButton
          text={"Alterar dados"}
          onPress={() => navigation.navigate("DataAlteration")}
        />

        <DefaultButton
          text={"Deletar a conta"}
          onPress={() => navigation.navigate("Home")}
        />

        <CancelButton text={"Sair da conta"} />

      </View>
    </ScrollView>
  );
};

export default PersonalInformation;
