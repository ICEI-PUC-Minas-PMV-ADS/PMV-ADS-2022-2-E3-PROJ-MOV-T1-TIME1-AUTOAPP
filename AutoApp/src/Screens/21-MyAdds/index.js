import { ScrollView, View, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Nav from "../../Components/NavBar/index";
import DefaultButton from "../../Components/Buttons/Default";
import List from "../../Components/List";
import { styles } from "./styles";
import { useState, useEffect } from "react";
import { DatabaseConnection } from "../../Database/connection";
const db = DatabaseConnection.getConnection();

let adList = []



const MyAdds = () => {
  const navigation = useNavigation();
  let [flatListItems, setFlatListItems] = useState([]);
  
  console.log(" MyAdds")

  useEffect(() => {
    console.log("useEffect - MyAdds")

    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='ad_auto_app'",
        [],
        function (tx, res) {
          console.log("item (useEffect):", res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql("DROP TABLE IF EXISTS ad_auto_app", []);
            txn.executeSql(
              "CREATE TABLE IF NOT EXISTS car_auto_app(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), description VARCHAR(255))",
              []
            );
          }
        }
      );
    });

    db.transaction(function (tx) {
      tx.executeSql(
        "SELECT * FROM ad_auto_app ",
        [],
        (tx, results) => {
          let len = results.rows.length;
          console.log(results.rows)
          if (len > 0) {
            alert("Anúncios carregados com sucesso!");
            setFlatListItems(results.rows._array);
          } else {
            alert("Anúncios não encontrados!");
          }
        }
      );
    });

  }, []);


  let listItemView = (item) => {

    return (
      <View>
        <List 
        text= {item.name}
        onPress={() => navigation.navigate('ModalMyAds')}
        />
      </View>
    );
  };

  
  return (
    <ScrollView>
      <Nav onPress={() => navigation.navigate("Garages")} />
      <View style={styles.container}>
        
      <FlatList
            data={flatListItems}
            renderItem={({ item }) => listItemView(item)}
        />

        <DefaultButton 
        text="Adicionar anúncio"
        onPress={() => navigation.push('RegisterAd')}
        />
      </View>
    </ScrollView>
  );
};

export default MyAdds;
