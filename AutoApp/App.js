import { StatusBar, StyleSheet, Text, View } from 'react-native';
import CadastroOficina from '../AutoApp/src/Components/CadastroOfic';

export default function App() {
  
  return (
    <View style={styles.container}>
      <CadastroOficina />

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
