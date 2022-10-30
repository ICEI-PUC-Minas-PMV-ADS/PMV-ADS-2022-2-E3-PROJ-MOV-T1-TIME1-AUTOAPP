import { StyleSheet, Dimensions,ScrollView } from "react-native";

const {height, width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  marcadorContainer:{
    width:70,
    height:80,
    backgroundColor:'white',
    flexDirection:'column',
    borderRadius:8,
    overflow:'hidden',
    alignItems:'center',

  },

  mapMarkerImage:{
    width:50,
    height:45,
    resizeMode:'cover',
  },

  /*placesContainer:{
    width:'100%',
    maxHeight: 200,
  },

  places:{
    width:width - 40,
    maxHeight: 200,
    backgroundColor: '#fff',
    marginHorizontal:20,
  }*/
 
});