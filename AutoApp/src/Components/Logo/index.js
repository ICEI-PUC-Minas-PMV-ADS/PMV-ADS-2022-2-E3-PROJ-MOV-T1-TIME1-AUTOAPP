import { Image } from "react-native";
import { styles } from "./styles";
import logo from "../../../assets/images/logo2.png";

const Logo = () => {
  return <Image source={logo} style={styles.logo} />;
};

export default Logo;
