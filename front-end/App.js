import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Magdo</Text>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 100,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
  },

  title: {
    fontSize: 20,
    padding: 20,
  },

});