import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} >Navbar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  }
});
