import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function TextDetails() {
  const images = [
    require('../../assets/icons/home.png'),
    require('../../assets/icons/location.png'),
    require('../../assets/icons/love.png'),
    require('../../assets/icons/next.png'),
  ];

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headerBox}>
          <View>
            <Text style={styles.headerText}>Hi lugie♥</Text>
            <Text style={styles.headerText}>Let's order great meals!</Text>
          </View>
          <Image source={images[2]} style={styles.heartIcon} />
        </View>
        <View style={styles.LocationBox}>
          <View style={styles.LocationTextBox}>
            <Image source={images[1]} style={styles.icon} />
            <Text style={styles.LocationText}>Current location</Text>
          </View>
          <Image source={images[3]} style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

export default TextDetails;

const styles = StyleSheet.create({
  container: {},
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  LocationText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  headerBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  LocationBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LocationTextBox: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  heartIcon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});
