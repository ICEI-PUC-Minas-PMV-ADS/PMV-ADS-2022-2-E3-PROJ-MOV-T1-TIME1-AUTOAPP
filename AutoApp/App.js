import { StatusBar, StyleSheet, View } from 'react-native';
import Login from '../AutoApp/src/Screens/Login'
import ChooseProfile from '../AutoApp/src/Screens/ChooseProfile'
import OwnerRegistration from '../AutoApp/src/Screens/OwnerRegistration'
import GarageRegistration from '../AutoApp/src/Screens/GarageRegistration';
import Home from '../AutoApp/src/Screens/Home'

export default function App() {
  
  return (
    <View style={styles.container}>
 
      <Home />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
