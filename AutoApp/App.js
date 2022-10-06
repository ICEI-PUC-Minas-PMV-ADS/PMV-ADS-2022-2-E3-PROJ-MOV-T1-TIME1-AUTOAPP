import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Cadastro from './src/Components/CadastroProp/index';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Cadastro />
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
