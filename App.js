import React from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';
import ParentComponent from './components/ParentComponent';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ParentComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#393939',
    padding: 8,
  },
});
