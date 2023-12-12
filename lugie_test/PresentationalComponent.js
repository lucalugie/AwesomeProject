import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const PresentationalComponent = props => {
  return (
    <View>
      {/* <Text onPress = {props.updateState}>
            {props.myState}
         </Text> */}
      {/* <TouchableOpacity onPress={props.updateState}>
        <Text style={styles.myState}>{props.myState}</Text>
      </TouchableOpacity> */}

      <Text style={styles.myState}>{props.myState}</Text>
    </View>
  );
};
export default PresentationalComponent;

const styles = StyleSheet.create({
  myState: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
