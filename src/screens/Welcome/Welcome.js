import {StyleSheet, Text, View, Image, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
// import Menu from "../component/Menu";
//import bg from "../../assets/carbg.png";

const Welcome = ({navigation}) => {
  const description =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ';

  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        {/* <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("")}
        /> */}

        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: '#4c5dab',
              marginTop: 0,
            },
          ]}>
          {/* {props.channelName} */}
        </Text>

        <Text style={styles.paraStyle}>{description} </Text>
      </View>

      {/* <ImageBackground source={bg} resizeMode="cover" style={styles.image}></ImageBackground> */}
        <View style={styles.overlay}>
          {/* <Image style={styles.logo} source={welcomelogo} /> */}
          <Text style={styles.button1} onPress={() => navigation.navigate('login')}>
            Login
          </Text>
          <Text style={styles.button1} onPress={() => navigation.navigate('signup')}>
            Signup
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  homeTop: {
    // height: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
    fontFamily: 'Nunito_600SemiBold',
  },

  paraStyle: {
    textAlign: 'left',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
    fontFamily: 'JosefinSans_400Regular',
  },

  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  imgbg: {
    position: 'absolute',
    display: 'flex',
    top: 20,
    bottom: 10,
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  head: {
    fontSize: 30,
    color: '#fff',
  },
  container1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  logo: {
    height: '20%',
    resizeMode: 'contain',
    marginBottom: 50,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 1,
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
});

export default Welcome;
