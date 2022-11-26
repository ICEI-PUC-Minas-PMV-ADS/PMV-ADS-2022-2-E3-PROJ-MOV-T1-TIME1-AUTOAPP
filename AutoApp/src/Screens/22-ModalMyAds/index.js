import { useState } from "react";
import { View, ScrollView, Text } from "react-native";
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import Statusbar from "../../Components/StatusBar";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import { styles } from "./style";
import Close from "../../Components/Buttons/Close";

const ModalMyAds = () => {
  const AdsDetails = useState("Exemplo");
  const Alcance = useState("x");

  return (
    <ScrollView>
      <Statusbar />
      <Close />

      <View style={styles.container}>
        <Text style={styles.titulo}>Anúncio Postado</Text>

        <Text style={styles.texto}>{AdsDetails}</Text>
        <View style={styles.alcance}>
          <Text style={styles.textoAlt}>Alcance do anúncio: {Alcance}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ModalMyAds;
