import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "blue", fontWeight: "bold", fontSize: 24 }}>
        Meu primeiro projeto! Hello World
     </Text>
     <Text style={styles.title}>Meu primeiro projeto! Usando styles.title</Text>

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
  title: {
    color: "red",
    fontWeight: "bold",
    fontSize: 24,
  },
});
