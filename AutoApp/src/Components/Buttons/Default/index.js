import { SafeAreaView, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

const DefaultButton = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonArea} onPress={props.customClick}>
        <Text style={styles.text}> {props.text} </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DefaultButton;
