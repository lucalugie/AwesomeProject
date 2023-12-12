/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
//Luca mini project 
import React from 'react';
import { Button } from 'react-native'
import { TouchableOpacity, StyleSheet, View, Text, Animated, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';

// const Stack = createNativeStackNavigator();

function App() {
  return (
    <Home />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;


