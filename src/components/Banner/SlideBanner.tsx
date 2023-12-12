import React, {useState} from 'react';
import {Dimensions, View, StyleSheet, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
// import Pagination from 'react-native-reanimated-carousel';

function SlideBanner() {
  const width = Dimensions.get('window').width;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFast, setIsFast] = useState(false);

  const banners = [
    require('../../assets/background/banner1.jpg'),
    require('../../assets/background/banner2.jpg'),
    require('../../assets/background/banner3.jpg'),
    require('../../assets/background/banner4.jpg'),
    require('../../assets/background/banner5.jpg'),
  ];

  //   <Pagination
  //     dotsLength
  //      activeDotIndex
  //      containerStyle
  //      activeDotStyle
  //      inactiveDotStyle
  //  />

  // const [activeSlide, setActiveSlide] = useState(0);
  // const renderPagination = () => (
  //   // <Pagination
  //   // dotsLength={banners.length}
  //   // activeIndex={activeSlide}
  //   // dotStyle={styles.dotStyle}
  //   // inactiveDotStyle={styles.inactiveDotStyle}
  //   // inactiveDotOpacity={0.4}
  //   // inactiveDotScale={0.6}
  //   // />

  //   <PaginationItem
  //   animValue={progressValue}
  //   index={index}
  //   key={index}
  //   isRotate={isVertical}
  //   length={banners.length}
  // />
  // );

  // const renderPagination = () => {
  //   return (
  //     <View style={styles.paginationContainer}>
  //       {banners.map((_, index) => (
  //         <View
  //           key={index}
  //           style={[
  //             styles.dotStyle,
  //             activeSlide === index && {backgroundColor: 'darkgrey'},
  //           ]}
  //         />
  //       ))}
  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      <View style={styles.carouselWrapper}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          autoPlayInterval={isFast ? 100 : 1000}
          data={banners}
          scrollAnimationDuration={2000}
          onSnapToItem={index => {
            console.log('current index:', index);
            setActiveSlide(index);
          }}
          renderItem={({item, index}) => (
            <View style={styles.bannerWrapper}>
              <Image source={item} style={styles.banner} />
            </View>
          )}
        />
        <View style={styles.paginationWrapper}>
          {banners.map((banner, index) => (
            <View
              key={index}
              style={[
                styles.dotStyle,
                activeSlide === index && {backgroundColor: '#4F4F4F'},
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

export default SlideBanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 130,
  },
  banner: {
    borderRadius: 5,
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  bannerWrapper: {
    padding: 4,
    margin: 10,
  },
  paginationWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    marginHorizontal: 2,
    marginTop: 5,
  },
});
