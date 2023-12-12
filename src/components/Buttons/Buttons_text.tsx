import React from 'react';
import {View, Text, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface BUTTON_PROPS {
  name: string;
  imgSource: ImageSourcePropType;
}

function Buttons_text({name, imgSource}: BUTTON_PROPS) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#ffffff', '#E3E3E3']}
        style={styles.linearGradient}>
        <View style={styles.buttonWrap}>
          <Image source={imgSource} style={styles.image} />
        </View>
      </LinearGradient>
      <Text style={styles.buttonText}>{name}</Text>
    </View>
  );
}

export default Buttons_text;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    width: 120, 
    height: 80, 
  },
  linearGradient: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#4F4F4F',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttonWrap: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
