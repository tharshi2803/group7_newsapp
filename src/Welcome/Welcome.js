import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

const ENTRIES1 = [
  {
    illustration: 'https://i.imgur.com/JS2H27i.jpeg',
  },
  {
    illustration: 'https://i.imgur.com/mDCmhxy.jpeg',
  },
  {
    illustration: 'https://i.imgur.com/o2SSOjD.jpeg',
  },
  {
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    illustration: 'https://i.imgur.com/TmsbgtM.jpeg',
  },
];
const {width: screenWidth} = Dimensions.get('window');

const Welcome = ({navigation}) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.mainHeader,
          {
            fontSize: 33,
            color: '#4c5dab',
            marginTop: 0,
          },
        ]}>
        Welcome to News
      </Text>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />

      <Text
        style={[
          styles.subtext,
          {
            fontSize: 25,
            color: '#4c5dab',
            marginTop: 0,
          },
        ]}>
        Login or Register to access more features.....
      </Text>
      <Text
        style={[
          styles.subtext,
          {
            fontSize: 20,
            color: '#4c5dab',
            marginTop: 2,
          },
        ]}>
        Local news, Foreign news, Sports news, space news, Interesting facts and
        more
      </Text>

      <View style={styles.overlay}>
        <Text
          style={styles.button1}
          onPress={() => navigation.navigate('login')}>
          Login
        </Text>
        <Text
          style={styles.button1}
          onPress={() => navigation.navigate('signup')}>
          Signup
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  button1: {
    backgroundColor: '#3b7197',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    minWidth: 150,
    textAlign: 'center',
    margin: 10,
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
});
