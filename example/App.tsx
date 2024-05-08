import { StyleSheet, Text, View } from 'react-native';

import * as LironnickPagseguro from 'lironnick-pagseguro';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{LironnickPagseguro.hello()}</Text>
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
