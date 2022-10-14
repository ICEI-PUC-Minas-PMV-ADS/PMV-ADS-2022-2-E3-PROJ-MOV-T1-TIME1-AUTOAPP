import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const VariantButton = ({ text, onPress }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}> {text} </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VariantButton;
