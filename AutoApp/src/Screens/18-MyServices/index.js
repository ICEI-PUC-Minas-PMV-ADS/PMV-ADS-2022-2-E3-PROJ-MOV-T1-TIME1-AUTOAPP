import { ScrollView, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";
import { useState, useEffect } from "react";

import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();
let serviceList = [];

const MyServices = () => {
  const navigation = useNavigation();
  let [flatListItems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='service_auto_app'",
        [],
        function (tx, res) {
          console.log("item:", res.rows.length);
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

    db.transaction(function (tx) {
      tx.executeSql("SELECT * FROM service_auto_app ", [], (tx, results) => {
        let len = results.rows.length;
        console.log(
          "Results from SELECT * FROM service_auto_app : ",
          results.rows
        );
        if (len > 0) {
          alert("Serviços carregados com sucesso!");
          this.serviceList = results.rows;
          console.log(this.serviceList._array);
          setFlatListItems(this.serviceList._array);
        } else {
          alert("Serviços não encontrados!");
        }
      });
    });
  }, []);

  let listItemView = (item) => {
    return (
      <View>
        <List
          source={require("../../../assets/images/tools.png")}
          text={item.description}
          onPress={() => navigation.navigate("ModalMaintenance")}
        />
      </View>
    );
  };

  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("Home")} />

      <View style={styles.container}>
        <FlatList
          data={flatListItems}
          renderItem={({ item }) => listItemView(item)}
        />
        <DefaultButton
          text="Adicionar serviço"
          onPress={() => navigation.navigate("AddServices")}
        />
      </View>
    </ScrollView>
  );
};

export default MyServices;
