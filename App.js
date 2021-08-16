import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// import Product from './forms/ProductForm';
// import SimpleForm from './forms/SimpleForm';
import SimpleForm from './forms/SimpleForm';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open ZiziForms</Text>
      <StatusBar style="auto" />
      <SimpleForm />
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
