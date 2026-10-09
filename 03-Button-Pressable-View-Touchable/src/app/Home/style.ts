import { StyleSheet } from "react-native";
import { Platform } from "react-native";

const newLocal = "rgba(49, 126, 156, 0.27)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    ...Platform.select({
      ios: {     color: "red",   },
      android: {  color: "blue",  },
      default: {  color: "green",  }
    })  
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  pressable: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    // backgroundColor: "rgba(9, 181, 249, 0.27)"
  },
  touch:{
    backgroundColor: "rgba(9, 181, 249, 0.27)",

  }
});

export default styles;
