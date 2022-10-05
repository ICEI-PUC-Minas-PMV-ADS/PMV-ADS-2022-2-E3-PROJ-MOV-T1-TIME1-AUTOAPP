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
    marginTop: 30,
  },
   input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 3,
    backgroundColor: '#FFF',
  }, 
   button: {
    width: 300,
    height: 42,
    padding: 10,
    backgroundColor: "182E3A",
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '182E3A'
  },
  registerText: {
     color: "F58426"
  },
  buttonRegister: {
    marginTop: 10
  },
  senha: {
    alignItems: 'selfEnd'
  },
  text: {
    fontSize: 16,
  },
});