import { Image, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import add from "../../../../assets/icons/Add.png";

const Add = () => {
  return (
    <SafeAreaView>
        <TouchableOpacity style={styles.container}>
          <Image source={add} style={styles.add} />
        </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Add;
