import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './components/AppHeader/AppHeader'
import LocationSearchBar from './components/LocationSearchBar/LocationSearchBar'

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
