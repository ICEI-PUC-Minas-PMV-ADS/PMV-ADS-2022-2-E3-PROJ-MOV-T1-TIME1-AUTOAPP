import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from "react";
import { View, ScrollView, Alert} from "react-native";
import { TextInput } from "react-native-paper";
import Nav from "../../Components/NavBar";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./style";

import { DatabaseConnection } from '../../Database/connection';
const db = DatabaseConnection.getConnection();

const form = {
  name: "",
  email: "",
  cell: "",
  document: "",
  password: "",
  confirmedPassword: "",
};

const OwnerRegistration = () => {
  const navigation = useNavigation();


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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  let registerOwner = () => {
    console.log(name, email, cell, document, password, confirmedPassword);

    if (!name) {
      alert('Por favor preencha o nome !');
      return;
    }
    if (!email) {
      alert('Por favor preencha o contato');
      return;
    }

    if (!document) {
      alert('Por favor preencha o documento');
      return;
    }
    
    if (!password) {
      alert('Por favor preencha a senha !');
      return;
    }

    if (!confirmedPassword) {
      alert('Por favor preencha a confirmacao da senha !');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO user_auto_app ( name , email , cell , document , password , confirmed_password ) VALUES (?,?,?,?,?,?)',
        [name, email, cell, document, password, confirmedPassword],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          console.log(results)

          if (results.rowsAffected > 0) {
            Alert.alert(
              'Sucesso',
              'Usuário Registrado com Sucesso !!!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('LOGIN'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Erro ao tentar Registrar o Usuário !!!');
        }
      );
    });
  };

  return (
    <ScrollView>
      <Statusbar />
      <Nav />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          label="Nome completo"
          value={name}
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
          value={confirmedPassword}
          onChangeText={(confirmedPassword) =>
            setConfirmedPassword(confirmedPassword)
          }
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
        />

        <DefaultButton text={"Cadastrar"}  customClick={registerOwner} />
      </View>
    </ScrollView>
  );
};

export default OwnerRegistration;
