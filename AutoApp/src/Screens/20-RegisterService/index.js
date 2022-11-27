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
  serviceName: "",
  serviceDescription: "",
  servicePrice: "",
};

const AddServices = () => {
  const navigation = useNavigation();
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='service_auto_app'",
        [],
        function (tx, res) {
          console.log("item (useEffect):", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS service_auto_app", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS service_auto_app(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), description VARCHAR(255), price FLOAT64 )",
              []
            );
          }
        }
      );
    });
  }, []);

  let registerService = () => {
    console.log("registerService");
    console.log(serviceName, serviceDescription, servicePrice);

    db.transaction(function (tx) {
      tx.executeSql(
        "INSERT INTO service_auto_app ( name , description, price ) VALUES (?,?,?)",
        [serviceName, serviceDescription, servicePrice],
        (tx, results) => {
          console.log("Results", results.rowsAffected);
          console.log(results);

          if (results.rowsAffected > 0) {
            alert("Servico Registrado com Sucesso !!!");
            navigation.navigate("MyServices", {});
          } else alert("Erro ao tentar Registrar o Serviço!!!");
        }
      );
    });
  };

  return (
    <ScrollView>
      <Statusbar />
      <Nav onPress={() => navigation.navigate("MyServices")} />
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            label="Nome do Serviço"
            onChangeText={(serviceName) => setServiceName(serviceName)}
            mode="outlined"
            activeOutlineColor="#182E3A"
            outlineColor="#182E3A"
            right={<TextInput.Icon icon="square-edit-outline" />}
          />
        </View>

        <TextInput
          style={styles.input}
          label="Descrição do Serviço"
          onChangeText={(serviceDescription) =>
            setServiceDescription(serviceDescription)
          }
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <TextInput
          style={styles.input}
          label="Valor dos Serviço"
          onChangeText={(servicePrice) => setServicePrice(servicePrice)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}
        />

        <DefaultButton text={"Salvar"} onPress={registerService} />
        <CancelButton text={"Cancelar"} />
      </View>
    </ScrollView>
  );
};
export default AddServices;
