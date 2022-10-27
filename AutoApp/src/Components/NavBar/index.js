import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import arrow from "../../../assets/icons/Arrow.png";
import logo from "../../../assets/images/logo2.png";

const Nav = ({ onPress }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image source={arrow} style={styles.arrow} onPress={onPress}/>
        </TouchableOpacity>
        <Image source={logo} style={styles.logo} />
      </View>
    </SafeAreaView>
  );
};

export default Nav;
