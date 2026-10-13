import { Text, View, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Trabalhando com TextInput</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            // multiline={false}
            // editable
            // secureTextEntry
            keyboardType="default"
            onChangeText={(text) => setText(text)}
            value={text}
          />

          <Text> Olá sou o estado do input: {text}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
