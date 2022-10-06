import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginHorizontal:10,
    width,
    height: 150,
    marginBottom: 10
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 1,
  },
});
