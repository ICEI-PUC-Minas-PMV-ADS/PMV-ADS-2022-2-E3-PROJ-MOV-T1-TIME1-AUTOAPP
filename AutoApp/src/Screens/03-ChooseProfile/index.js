import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../Components/Logo";
import VariantButton from "../../Components/Buttons/Variant";
import Statusbar from "../../Components/StatusBar";
import { styles } from "./styles";

const ChooseProfile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Statusbar />
        <Logo />

        <View style={styles.buttonArea}>
          <VariantButton
            text={"Sou \n Proprietário"}
            onPress={() => navigation.navigate("OwnerRegistration")}
          />

          <VariantButton
            text={"Sou \n Mecânico"}
            onPress={() => navigation.navigate("GarageRegistration")}
          />
        </View>

        
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.registerText}
          > Já tem cadastro? </Text>
          <TouchableOpacity style={styles.textArea}>
            <Text
            style={styles.textoalt}
            onPress={() => navigation.navigate("Login")}
          >
            Faça seu login!
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ChooseProfile;
