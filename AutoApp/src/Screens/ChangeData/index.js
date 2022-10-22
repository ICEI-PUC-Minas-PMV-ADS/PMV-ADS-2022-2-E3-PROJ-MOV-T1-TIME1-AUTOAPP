import { View, ScrollView } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";

const DataAlteration = () => {
  return (
    <ScrollView>
      <Statusbar />
      <Nav />
      <View style={styles.container}>
        <DefaultButton text={"Salvar"} />
        <CancelButton text={"Cancelar"} />
      </View>
    </ScrollView>
  );
};
export default DataAlteration;
