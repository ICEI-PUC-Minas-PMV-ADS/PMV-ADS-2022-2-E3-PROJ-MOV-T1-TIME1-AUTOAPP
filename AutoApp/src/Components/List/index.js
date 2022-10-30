import { Text, View, Image } from "react-native";
import { FAB } from "react-native-paper";
import { styles } from "./styles";

const List = ({ source, text }) => {
  return (
    <View style={styles.borderArea}>
      <Image
        source={source}
        style={styles.buttonImage}
      />
      <Text style={styles.buttonText}> {text} </Text>
      <FAB
        style={styles.fab}
        icon="plus"
        animated="true"
        color="#ffffff"
        mode="flat"
      />
    </View>
  );
};

export default List;
