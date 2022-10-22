import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#9CABC2", 
    height: 60,
    borderRadius: 15,
    margin: 5,
  },
    buttonImageIconStyle: {
    padding: 15,
    margin: 10,
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 50,
  },
  buttonTextStyle: {
    color: "#9CABC2",
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 15,
  },
    fab: {
    flex: 1,
    alignItems: 'center',
    position: "absolute",
    margin: 5,
    right: 5,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: "#182E3A"
},
});