import React from 'react';
import {View, StyleSheet, Image, ImageSourcePropType} from 'react-native';

interface BANNER_PROPS {
  imgSource: ImageSourcePropType;
}

function Banner({imgSource}: BANNER_PROPS) {
  return (
    <View style={styles.container}>
      <Image source={imgSource} style={styles.image} />
    </View>
  );
}

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: 5,
    justifyContent: 'center',
    display: 'flex'
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    borderRadius: 5,
  },
});
