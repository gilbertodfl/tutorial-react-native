import { Text, View, Image, Button, Alert, Pressable, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import { StatusBar } from "expo-status-bar";

export default function App() {

  const handlePress = (componente: string) => {
    Alert.alert(`clicou em um componente: ${componente}`)
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Trabalhando com Botões</Text>

          <View
            style={{
              marginBottom: 20,
              marginTop: 20,
              borderRadius: 10,
              backgroundColor: "#f0f0f0",
              width: 300,          // mais largo
              padding: 20,         // respiro interno
              gap: 20,             // espaço entre Button e Pressable
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "stretch", // filhos ocupam toda a largura
            }}
          >
            <Button
              title="Button - Eu sou o mais simples"
              onPress={() => handlePress('button')}
              color="green"
            />

            <Pressable
              onPress={() => Alert.alert("Cliquei Pressable")}
              style={{
                backgroundColor: "white",
                paddingVertical: 12,
                paddingHorizontal: 20,
                borderRadius: 6,
                alignItems: "center",
              }}
            >
              <Text>Pressable - Eu sou o melhor de todos</Text>
            </Pressable>
            <Pressable
              style={ ({pressed}) => [
                styles.pressable, { backgroundColor: pressed ? "red" : "cyan"}
              ]} 
            >
              <Text stype={styles.title}>pressione e fica vermelho </Text>
            </Pressable>  
            
          </View>
          <Text style={styles.title}>Abaixo temos um Image</Text>
          <Pressable onPress ={ () =>  handlePress('Imagem') } hitSlop={{top:20, bottom:20, left:20, right:20}}>
            <Image
              source={require("../img/gamer.png")}
              style={styles.image}
            />
          </Pressable>
          <TouchableOpacity style={[styles.pressable, styles.touch]}>
             <Text style={styles.title}>Sou um TouchableOpacity - eu fico em segundo lugar</Text>
          </TouchableOpacity>   
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}