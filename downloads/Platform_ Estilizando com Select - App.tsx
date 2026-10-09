import {
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import { useEffect, useState } from "react";

export default function App() {
  const handlePress = (tipo: string) => {
    if (Platform.OS === "web") {
      window.alert(`Download em progresso: ${tipo}`);
    }

    Alert.alert(`Download em progresso: ${tipo}`);
  };

  const [store, setStore] = useState("");

  useEffect(() => {
    if (Platform.OS === "ios") {
      setStore("App Store");
    } else if (Platform.OS === "android") {
      setStore("Play Store");
    } else {
      setStore("Windows Store");
    }
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.title}>Baixe no {store}</Text>

          <TouchableOpacity onPress={() => handlePress(store)}>
            <Image source={require("./img/gamer.png")} style={styles.image} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
