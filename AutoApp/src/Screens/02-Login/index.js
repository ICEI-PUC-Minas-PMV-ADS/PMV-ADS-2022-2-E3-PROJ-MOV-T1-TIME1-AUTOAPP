import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../../Components/Logo";
import Statusbar from "../../Components/StatusBar";
import DefaultButton from "../../Components/Buttons/Default";
import { styles } from "./styles";

import { DatabaseConnection } from '../../Database/connection';
const db = DatabaseConnection.getConnection();

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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


  let realizeLogin = () => {
    console.log(email, password);

    db.transaction(function (tx) {
      tx.executeSql(
        'SELECT * FROM user_auto_app WHERE email = ? and password = ?', [email, password],
        (tx, results) => {
          var len = results.rows.length;

          if (len > 0) {
            alert('Usuário logado !');
            let currentUser = results.rows.item(0);

            navigation.navigate('Home', {
              userId: currentUser.user_id,
              name: currentUser.name,
              email: currentUser.email,
              cell: currentUser.cell,
              document: currentUser.document
            })
          } else {
            alert('Usuário não encontrado !');
          }
        }
      );
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Statusbar />
        <Logo />

        <TextInput
          style={styles.input}
          label="E-mail"
          value={email}
          autoCorrect={false}
          onChangeText={(email) => setEmail(email)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          left={<TextInput.Icon icon="account" />}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          onChangeText={(password) => setPassword(password)}
          label="Senha"
          value={password}
          secureTextEntry={true}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          left={<TextInput.Icon icon="key" />}
        />

        <TouchableOpacity style={styles.password}>
          <Text style={styles.password}> Esqueceu a senha?</Text>
        </TouchableOpacity>

        <DefaultButton 
        text={"Login"} 
        onPress={realizeLogin} />

        <TouchableOpacity style={styles.register}>
          <Text> Não tem cadastro? </Text>
          <Text style={styles.registerText} onPress={() => navigation.navigate('OwnerRegistration')} >Registre-se!</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
