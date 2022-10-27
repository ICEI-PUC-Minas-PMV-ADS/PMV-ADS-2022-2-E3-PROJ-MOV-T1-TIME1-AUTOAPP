import { View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native'
import { useState } from "react"
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";

const form = {
  firstAd: "",
  secondAd: "",
  thirdAd: "",
};

const RegisterAd = () => {
  const navigation = useNavigation();
  const [firstAd, seFirstAd] = useState("")
  const [secondAd, setSecondAd] = useState("")
  const [thirdAd, setThirdAd] = useState("")

  return (
    <ScrollView>
      <Statusbar />
      <Nav onPress={() => navigation.navigate("Garages")} />
      <View style={styles.container}>
        <View>
        <TextInput
          style={styles.input}
          label="Anúncio 1"
          placeholder=""
          onChangeText={(firstAd) => seFirstAd(firstAd)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />
        </View>

        <TextInput
          style={styles.input}
          label="Anúncio 2"
          placeholder=""
          onChangeText={(secondAd) => setSecondAd(secondAd)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />

        <TextInput
          style={styles.input}
          label="Anúncio 3"
          placeholder=""
          onChangeText={(thirdAd) => setThirdAd(thirdAd)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />

        <DefaultButton text={"Salvar"} />
        <CancelButton text={"Cancelar"} />
      </View>
    </ScrollView>
  );
};
export default RegisterAd;
