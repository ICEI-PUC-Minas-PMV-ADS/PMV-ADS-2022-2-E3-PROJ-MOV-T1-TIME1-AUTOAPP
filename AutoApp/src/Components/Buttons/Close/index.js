import { Image, SafeAreaView, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import close from "../../../../assets/icons/Close.png";

const Close = () => {
  return (
    <SafeAreaView>
        <TouchableOpacity style={styles.container}>
          <Image source={close} style={styles.close} />
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Close;
