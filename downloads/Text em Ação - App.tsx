import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

export default function App() {
  const [textParagrafo, setTextParagrafo] = useState("Ana");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Olá Impressionador!</Text>
          <Text style={{ color: "blue", fontSize: 15 }}>
            Bem vindo ao mundo mobile
          </Text>
          <Text>{textParagrafo}</Text>
          <Text>
            Lorem ipsum{" "}
            <Text
              style={{ color: "green" }}
              onPress={() => {
                Alert.alert("Olá, eu sou um alert");
              }}
            >
              dolor sit amet
            </Text>{" "}
            consectetur adipisicing elit. Sint veritatis placeat tempore
            mollitia autem pariatur unde debitis corrupti facilis dolores
            voluptatum quod, minima voluptates.{" "}
            <Text
              style={{ color: "red" }}
              onPress={() => {
                setTextParagrafo("Millene");
              }}
            >
              MUDAR NOME
            </Text>{" "}
            Qui quaerat maxime voluptatem a repellat!
          </Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
