import { Image, SafeAreaView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import goback from "../../../../assets/icons/Arrow.png";

const GoBack = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.container}>
        <Image source={goback} style={styles.goback} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GoBack;
