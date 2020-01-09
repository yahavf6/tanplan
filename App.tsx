import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import AppHeader from './components/AppHeader/AppHeader'
import UserMaps from './components/UserMaps/UserMaps'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <UserMaps />
    </View>
  );
}

const statusBarHeight = getStatusBarHeight();

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 50 : 50,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
