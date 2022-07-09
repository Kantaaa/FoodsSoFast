import React from 'react';
import { Searchbar } from 'react-native-paper';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  View
} from 'react-native';
import { RestaurantInfoCard } from '../components/resturantInfoCardComponent';

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <RestaurantInfoCard />
    <View style={styles.list}></View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  search: {
    padding: 16
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: 'silver'
  }
});
