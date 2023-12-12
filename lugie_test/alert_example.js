import React from 'react';
import {Alert, Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const AlertExample = () => {
  const showAlert = () => {
    Alert.alert('YHi my name is Lugie ;-3♥');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showAlert} style={styles.button}>
        <Text>Alert</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AlertExample;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 100,
  },
  container: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
});
