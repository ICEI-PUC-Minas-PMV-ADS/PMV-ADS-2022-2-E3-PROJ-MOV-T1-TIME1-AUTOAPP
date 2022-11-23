import { ScrollView, View, FlatList } from "react-native";
import { useNavigation, Alert } from "@react-navigation/native";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();

let mainList = []

const MyMaintenances = () => {
const navigation = useNavigation();
  let [flatListItems, setFlatListItems] = useState([]);

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
              "CREATE TABLE IF NOT EXISTS car_auto_app(id INTEGER PRIMARY KEY AUTOINCREMENT, mainName VARCHAR(255), mainDescription VARCHAR(255), mainDate DATE)",
              []
            );
          }
        }
      );
    });

    db.transaction(function (tx) {
      tx.executeSql(
        "SELECT * FROM main_auto_app ",
        [],
        (tx, results) => {
          let len = results.rows.length;
          if (len > 0) {
            alert("Manutenções carregadas com sucesso!");
            this.mainList = results.rows;
            console.log(this.mainList._array)
            setFlatListItems(this.mainList._array);
          } else {
            alert("Manutenções não encontradas!");
          }
        }
      );
    });

  }, []);


  let listItemView = (item) => {

    return (
      <View>
        <List 
        text= {item.model}
        onPress={() => navigation.navigate('ModalMaintenance')}
        />
      </View>
    );
  };


  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("Owners")} />
      <View style={styles.container}>

  <FlatList
            data={flatListItems}
            renderItem={({ item }) => listItemView(item)}
/>

        <DefaultButton
          text="Adicionar manutenção"
          onPress={() => navigation.push("AddMaintenance")}
        />
      </View>
    </ScrollView>
  );
};

export default MyMaintenances;

