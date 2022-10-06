import { StatusBar, StyleSheet, Text, View } from 'react-native';
import GarageRegistration from '';

export default function App() {
  
  return (
    <View style={styles.container}>
      <GarageRegistration />

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
