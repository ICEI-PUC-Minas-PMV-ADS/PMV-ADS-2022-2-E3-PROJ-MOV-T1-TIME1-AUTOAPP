import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 30
  },
  
  ret: {
    width: 40,
    height: 40,
    marginTop: 15,
    marginBottom: 30,
    marginRight: 220
  },
  input: {
    width: 263,
    height: 50,
    fontSize: 16,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    marginBottom: 14,
  },
  button: {
    width: 263,
    height: 50,
    backgroundColor: "#182E3A",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 14,
    borderRadius: 4,
  },
  submitText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#182E3A",
  },
  register: {
    flex: 1,
    fontSize: 16,
    flexDirection: 'row'
  },
  registerText: {
    color: "#F58426",
    fontWeight: "bold",
  },
  password: {
    alignSelf: "flex-end",
    marginBottom: 7,
  },
  text: {
    fontSize: 16,
  },
});