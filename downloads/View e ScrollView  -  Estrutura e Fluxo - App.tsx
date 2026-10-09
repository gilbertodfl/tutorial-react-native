import { Text, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>Eu estou de FORA!!</Text>
        <ScrollView style={{ backgroundColor: "pink" }}>
          <View>
            <Text>Hello World!</Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet tempora sint unde similique! Praesentium ab laboriosam
              quos deserunt culpa veritatis magni ad quod accusantium itaque
              reiciendis, ex libero et. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illo eveniet tempora sint unde similique!
              Praesentium ab laboriosam quos deserunt culpa veritatis magni ad
              quod accusantium itaque reiciendis, ex libero et. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Illo eveniet tempora
              sint unde similique! Praesentium ab laboriosam quos deserunt culpa
              veritatis magni ad quod accusantium itaque reiciendis, ex libero
              et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet tempora sint unde similique! Praesentium ab laboriosam
              quos deserunt culpa veritatis magni ad quod accusantium itaque
              reiciendis, ex libero et. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illo eveniet tempora sint unde similique!
              Praesentium ab laboriosam quos deserunt culpa veritatis magni ad
              quod accusantium itaque reiciendis, ex libero et. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Illo eveniet tempora
              sint unde similique! Praesentium ab laboriosam quos deserunt culpa
              veritatis magni ad quod accusantium itaque reiciendis, ex libero
              et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet tempora sint unde similique! Praesentium ab laboriosam
              quos deserunt culpa veritatis magni ad quod accusantium itaque
              reiciendis, ex libero et. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illo eveniet tempora sint unde similique!
              Praesentium ab laboriosam quos deserunt culpa veritatis magni ad
              quod accusantium itaque reiciendis, ex libero et. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Illo eveniet tempora
              sint unde similique! Praesentium ab laboriosam quos deserunt culpa
              veritatis magni ad quod accusantium itaque reiciendis, ex libero
              et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet tempora sint unde similique! Praesentium ab laboriosam
              quos deserunt culpa veritatis magni ad quod accusantium itaque
              reiciendis, ex libero et. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illo eveniet tempora sint unde similique!
              Praesentium ab laboriosam quos deserunt culpa veritatis magni ad
              quod accusantium itaque reiciendis, ex libero et. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Illo eveniet tempora
              sint unde similique! Praesentium ab laboriosam quos deserunt culpa
              veritatis magni ad quod accusantium itaque reiciendis, ex libero
              et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet tempora sint unde similique! Praesentium ab laboriosam
              quos deserunt culpa veritatis magni ad quod accusantium itaque
              reiciendis, ex libero et. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illo eveniet tempora sint unde similique!
              Praesentium ab laboriosam quos deserunt culpa veritatis magni ad
              quod accusantium itaque reiciendis, ex libero et. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Illo eveniet tempora
              sint unde similique! Praesentium ab laboriosam quos deserunt culpa
              veritatis magni ad quod accusantium itaque reiciendis, ex libero
              et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet tempora sint unde similique! Praesentium ab laboriosam
              quos deserunt culpa veritatis magni ad quod accusantium itaque
              reiciendis, ex libero et. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illo eveniet tempora sint unde similique!
              Praesentium ab laboriosam quos deserunt culpa veritatis magni ad
              quod accusantium itaque reiciendis, ex libero et.Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Illo eveniet tempora sint
              unde similique! Praesentium ab laboriosam quos deserunt culpa
              veritatis magni ad quod accusantium itaque reiciendis, ex libero
              et.{" "}
              <Text style={{ color: "red" }}>
                OLÁ IMPRESSIONADOR ESTÁ USANDO A BARRA DE ROLAGEM
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
