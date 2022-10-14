import { Image, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import settings from "../../../assets/icons/Settings.png";

const Settings = () => {
  return (
    <SafeAreaView>
        <TouchableOpacity style={styles.container}>
          <Image source={settings} style={styles.settings} />
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;
