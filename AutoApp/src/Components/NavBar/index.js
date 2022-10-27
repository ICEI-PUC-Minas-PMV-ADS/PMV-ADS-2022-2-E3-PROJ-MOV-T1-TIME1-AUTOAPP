import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import arrow from "../../../assets/icons/Arrow.png";
import logo from "../../../assets/images/logo2.png";

const Nav = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
<<<<<<< HEAD
        <TouchableOpacity>
=======
        <TouchableOpacity onPress={onPress}>
>>>>>>> cabc3fc... Ajuste nas rotas
          <Image source={arrow} style={styles.arrow} />
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default Nav;
