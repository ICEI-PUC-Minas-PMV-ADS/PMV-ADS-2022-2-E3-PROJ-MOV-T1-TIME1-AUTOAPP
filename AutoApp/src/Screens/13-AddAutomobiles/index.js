import { View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from "react"
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";
import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();
const form = {
  licencePlate: "",
  brand: "",
  model: "",
  year: "",
};

const AddAutos = () => {

  const navigation = useNavigation();
  const [licencePlate, setLicencePlate] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [version, setVersion] = useState("")
  const [year, setYear] = useState("")

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='car_auto_app'",
        [],
        function (tx, res) {
          console.log("item (useEffect):", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS car_auto_app", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS car_auto_app(id INTEGER PRIMARY KEY AUTOINCREMENT, licencePlate VARCHAR(255), brand VARCHAR(255), model VARCHAR(255), version VARCHAR(255), year VARCHAR(255) )",
              []
            );
          }
        }
      );
    });
  }, []);


  let registerAuto = () => {
    console.log("registerAuto")
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO car_auto_app ( licencePlate , brand, model, version, year ) VALUES (?,?,?,?,?)',
        [licencePlate , brand, model, version, year],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          console.log(results)

          if (results.rowsAffected > 0) {

            alert("Carro Registrado com Sucesso !!!");
            navigation.navigate("MyVehicles", {});
          } else alert('Erro ao tentar Registrar o Carro !!!');
        }
      );
    });
  };



  
  return (
    <ScrollView>
      <Statusbar />
      <Nav onPress={() => navigation.navigate("Owners")} />
      <View style={styles.container}>
        <View>
        <TextInput
          style={styles.input}
          label="Placa"
          placeholder="BRA2E13"
          onChangeText={(licencePlate) => setLicencePlate(licencePlate)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />
        </View>

        <TextInput
          style={styles.input}
          label="Marca"
          placeholder="Fiat"
          onChangeText={(brand) => setBrand(brand)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />

        <TextInput
          style={styles.input}
          label="Modelo"
          placeholder="Bravo"
          onChangeText={(model) => setModel(model)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />

        <TextInput
          style={styles.input}
          label="Versão"
          placeholder="T-Jet"
          onChangeText={(version) => setVersion(version)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />

        <TextInput
          style={styles.input}
          label="Ano"
          placeholder="2012"
          onChangeText={(year) => setYear(year)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />

        <DefaultButton text={"Salvar"} onPress={registerAuto} />
        <CancelButton text={"Cancelar"} />
      </View>
    </ScrollView>
  );
};
export default AddAutos;
