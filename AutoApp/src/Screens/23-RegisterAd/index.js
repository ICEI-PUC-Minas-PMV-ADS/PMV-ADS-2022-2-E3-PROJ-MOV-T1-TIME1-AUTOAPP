import { View, ScrollView } from "react-native";
import { useNavigation, Alert } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";
import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();

const form = {
  adName: "",
  adDescription: "",
};

const RegisterAd = () => {
  const navigation = useNavigation();
  const [adName, setadName] = useState("");
  const [adDescription, setadDescription] = useState("");

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='ad_auto_app'",
        [],
        function (tx, res) {
          console.log("item (useEffect):", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS ad_auto_app", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS ad_auto_app(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), description VARCHAR(255))",
              []
            );
          }
        }
      );
    });
  }, []);

  let registerAd = () => {
    console.log("registerAd");
    console.log(adName, adDescription);

    db.transaction(function (tx) {
      tx.executeSql(
        "INSERT INTO ad_auto_app ( name , description) VALUES (?,?)",
        [adName, adDescription],
        (tx, results) => {
          console.log("Results (insert_ad_auto_app): ", results.rowsAffected);
          if (results.rowsAffected > 0) {
            alert("Anúncio Cadastrado com Sucesso!!!");
            navigation.navigate("MyAdds", {});
          } else alert("Erro ao tentar Cadastrar o Anúncio !!!");
        }
      );
    });
  };

  return (
    <ScrollView>
      <Statusbar />
      <Nav onPress={() => navigation.navigate("MyAdds")} />
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            label="Anúncio"
            onChangeText={(adName) => setadName(adName)}
            mode="outlined"
            activeOutlineColor="#182E3A"
            outlineColor="#182E3A"
            right={<TextInput.Icon icon="square-edit-outline" />}
          />
        </View>

        <TextInput
          style={styles.input}
          label="Descrição do Anúncio"
          onChangeText={(adDescription) => setadDescription(adDescription)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <DefaultButton text={"Salvar"} onPress={registerAd} />
        <CancelButton text={"Cancelar"} />
      </View>
    </ScrollView>
  );
};
export default RegisterAd;
