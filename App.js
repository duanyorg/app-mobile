import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const nome = ""
  const listaTemp = [1, 2, 3, 4, 5, 6, 7]

  const outraLista = listaTemp.filter((elem) => elem % 2 === 0)

  return (
    <View style={styles.container}>
      <View style={styles.testeEspaco}>
        <Text>Open up App.js to start</Text>
        <Text>working on your app!</Text>
      </View>

      <View>
        <Text>Outros textos</Text>
        <Text>Outros textos</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  testeEspaco: {
  }
});
