import { View, ScrollView } from "react-native";
import { useState } from "react"
import { TextInput } from "react-native-paper";
import DefaultButton from "../../Components/Buttons/Default";
import CancelButton from "../../Components/Buttons/Cancel";
import Nav from "../../Components/NavBar";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";

const form = {
  licencePlate: "",
  brand: "",
  model: "",
  year: "",
};

const AddAutos = () => {
  const [licencePlate, setLicencePlate] = useState("")
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")
  const [version, setVersion] = useState("")
  const [year, setYear] = useState("")

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

        <DefaultButton text={"Salvar"} />
        <CancelButton text={"Cancelar"} />
      </View>
    </ScrollView>
  );
};
export default AddAutos;
