import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const name: string = "Dave"
const age: Number = 42

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{name} is {age}</Text>
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
});
