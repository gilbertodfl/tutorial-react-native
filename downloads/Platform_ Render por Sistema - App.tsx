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
          {/* <Text style={styles.title}>
            {Platform.OS === "ios"
              ? "Baixe no App Store"
              : Platform.OS === "android"
              ? "Baixe no Play Store!"
              : "Baixe no Store"}
          </Text> */}

          <Text style={styles.title}>Baixe no {store}</Text>

          <TouchableOpacity onPress={() => handlePress("IOS | Android")}>
            <Image
              source={require("./img/gamer.png")}
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
