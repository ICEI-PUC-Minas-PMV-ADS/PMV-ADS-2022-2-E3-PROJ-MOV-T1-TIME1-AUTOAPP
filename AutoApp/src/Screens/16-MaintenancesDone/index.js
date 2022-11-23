import { View, ScrollView } from "react-native";
import { useNavigation, Alert } from '@react-navigation/native'
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
 mainName: "",
 mainDescription: "",
 mainDate: "",

};

const AddMaintenance = () => {
  const navigation = useNavigation();
  const [mainName, setmainName] = useState("")
  const [mainDescription, setmainDescription] = useState("")
  const [mainDate, setmainDate] = useState("")

useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='main_auto_app'",
        [],
        function (tx, res) {
          console.log("item (useEffect):", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS main_auto_app", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS car_auto_app(id INTEGER PRIMARY KEY AUTOINCREMENT, mainName VARCHAR(255), mainDescription VARCHAR(255), mainDate DATE )",
              []
            );
          }
        }
      );
    });
  }, []);


  let registerMain = () => {
    console.log("registerMain")
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO car_auto_app ( mainName, mainDescription, mainDate) VALUES (?,?,?)',
        [mainName, mainDescription, mainDate],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          console.log(results)

          if (results.rowsAffected > 0) {

            alert("Manutenção Registrada com Sucesso !!!");
            navigation.navigate("MyMaintenances", {});
          } else alert('Erro ao tentar Registrar a Manutenção !!!');
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
          label="Manutenção"
          onChangeText={(mainName) => setmainName(mainName)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />
        </View>

        <TextInput
          style={styles.input}
          label="Tipo de manutenção"
          onChangeText={(mainDescription) => setmainDescription(mainDescriptionl)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />

        <TextInput
          style={styles.input}
          label="Data"
          onChangeText={(mainDate) => setmainDate(mainDate)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />

        <DefaultButton text={"Salvar"} onPress={registerMain} />
        <CancelButton text={"Cancelar"} />
      </View>
    </ScrollView>
  );
};
export default AddMaintenance;
