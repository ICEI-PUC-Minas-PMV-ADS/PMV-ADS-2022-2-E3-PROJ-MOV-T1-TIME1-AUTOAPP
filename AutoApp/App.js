import { StatusBar, StyleSheet, Text, View } from 'react-native';
import OwnerRegistration from '';

export default function App() {
  
  return (
    <View style={styles.container}>
      <OwnerRegistration />
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
