import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => (
  <View style={styles.container}>
    <LinearGradient
      colors={['#48c6ef', '#6f86d6']}
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={styles.header}>Expo Starter</Text>
      <Text style={styles.subHeader}>UNIMODULES</Text>
      <Text style={styles.subHeader}>[ Linear Gradient ]</Text>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 14,
    letterSpacing: 4,
    color: '#FFFFFF',
  },
});

export default App;
