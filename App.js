import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, StyleSheet, Text, SafeAreaView, View } from 'react-native';

// const isAndroid = Platform.OS === "android";
// const checkOS = () => {
//   return isAndroid ? 40 : 0;
const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.viewCon}>
          <Text>Search </Text>
        </View>
        <View style={styles.viewCon2}>
          <Text>Stuff </Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  viewCon: {
    padding: 16,
    backgroundColor: 'lightblue'
  },
  viewCon2: {
    flex: 1,
    padding: 16,
    backgroundColor: 'blue'
  }
});

export default App;
