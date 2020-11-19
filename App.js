import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Navigation from './components/navigation/index';

export default function App() {
  return (
      <View style={styles.header}>
        < Navigation />
      </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
  },
  childContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "40%"
  }
})