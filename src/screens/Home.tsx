import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import TextDetails from '../components/Texts/TextDetails';
import Buttons_img from '../components/Buttons/Buttons_img';
import Buttons_text from '../components/Buttons/Buttons_text';
import LinearGradient from 'react-native-linear-gradient';
import Banner from '../components/Banner/Banner';
import SlideBanner from '../components/Banner/SlideBanner';

function Home() {
  const images = [
    require('../assets/button_img/line1.png'),
    require('../assets/button_img/line2.png'),
    require('../assets/button_img/line3.png'),
    require('../assets/button_img/line4.png'),
    require('../assets/button_img/line5.png'),
    require('../assets/background/banner.jpg'),
    require('../assets/background/background.png'),
  ];

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', '#0DB65F']}
        start={{x: -1, y: -1}}
        end={{x: 1, y: 1}}
        style={styles.linearGradient}>
        {/* <ImageBackground source={images[6]} style={styles.background}> */}
        {/* <LinearGradient
            colors={['rgba(0, 0, 0, 0)',  'rgba(0, 0, 0, 0.7)']}
            style={styles.gradient}
          /> */}
        <View style={styles.container}>
          <View style={styles.header}>
            <TextDetails />
          </View>
          <View style={styles.mainContent}>
            <View style={styles.buttonsWrapper}>
              <View style={styles.ButtonContentTop}>
                <Buttons_img name="Food" imgSource={images[0]} />
                <Buttons_img name="Mart" imgSource={images[3]} />
              </View>

              <View style={styles.ButtonContentBottom}>
                <Buttons_text name="Messenger" imgSource={images[1]} />
                <Buttons_text name="Ride" imgSource={images[2]} />
                <Buttons_text name="Packages" imgSource={images[4]} />
              </View>
            </View>
            <Banner imgSource={images[5]} />
            
          </View>
        </View>
        {/* </ImageBackground> */}
      </LinearGradient>
      <SlideBanner />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    padding: 15,
  },
  header: {
    marginTop: 20,
  },
  mainContent: {},
  ButtonContentTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  ButtonContentBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  buttonsWrapper: {
    width: '100%',
  },
  linearGradient: {
    height: '40%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  background: {
    resizeMode: 'contain',
    height: 200,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    overflow: 'visible',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
  },
});
