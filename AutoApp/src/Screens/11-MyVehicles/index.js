import { ScrollView, View, FlatList } from "react-native";
import { useNavigation, Alert } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import { useState, useEffect } from "react";
import List from "../../Components/List";
import { styles } from "./styles";
import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();
let carList = []

const MyVehicles = () => {
  const navigation = useNavigation();
  let [flatListItems, setFlatListItems] = useState([]);

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

    db.transaction(function (tx) {
      tx.executeSql(
        "SELECT * FROM car_auto_app ",
        [],
        (tx, results) => {
          let len = results.rows.length;
          if (len > 0) {
            alert("Carros carregados com sucesso!");
            this.carList = results.rows;
            console.log(this.carList._array)
            setFlatListItems(results._array);
          } else {
            alert("Carros não encontrados!");
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
      <Nav onPress={() => navigation.navigate("Home")} />
      
      <View style={styles.container}>

        <FlatList
            data={flatListItems}
            renderItem={({ item }) => listItemView(item)}
        />
        <DefaultButton 
        text={"Adicionar veículo"} 
        onPress={() => navigation.push('AddAutos')}
        />
      </View>
    </ScrollView>
  );

};

export default MyVehicles;
