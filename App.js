import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello there</Text>
      <Button style={styles.button} title='submit' >
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    backgroundColor: "yellow",
    borderWidth: 2,
    padding: 2,
    borderColor: 'red',
    borderRadius: 5,
    margin: 2,
  },
  button: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 15,
    backgroundColor: "yellow"
  }
});
