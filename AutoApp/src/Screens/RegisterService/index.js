import { View, ScrollView } from "react-native";
import { useState } from "react"
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";

const form = {
  oilChange: "",
  engineOverhaul: "",
  airConditioning: "",
};

const Services = () => {
  const [oilChange, setOilChange] = useState("")
  const [engineOverhaul, setEngineOverhaul] = useState("")
  const [airConditioning, setAirConditioning] = useState("")


  return (
    <ScrollView>
      <Statusbar />
      <Nav />
      <View style={styles.container}>
        <View>
        <TextInput
          style={styles.input}
          label="Troca de óleo"
          placeholder=""
          onChangeText={(oilChange) => setOilChange(oilChange)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />
        </View>

        <TextInput
          style={styles.input}
          label="Revisão de motor"
          placeholder=""
          onChangeText={(engineOverhaul) => setEngineOverhaul(engineOverhaul)}
          mode="outlined"
          activeOutlineColor="#182E3A"
          outlineColor="#182E3A"
          right={<TextInput.Icon icon="square-edit-outline" />}  
        />

        <TextInput
          style={styles.input}
          label="Revisão de ar condicionado"
          placeholder=""
          onChangeText={(airConditioning) => setAirConditioning(airConditioning)}
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
export default Services;
