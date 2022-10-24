import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 263,
    height: 50,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    marginBottom: 14,
  },
  submitText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#182E3A",
  },
  register: {
    flex: 1,
    flexDirection: "row",
  },
  registerText: {
    color: "#F58426",
    fontWeight: "bold",
  },
  password: {
    alignSelf: "flex-end",
    marginBottom: 7,
    paddingRight: 25,
  },
  text: {
    fontSize: 16,
  },
});
