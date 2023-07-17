import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Images } from '../config/Images';


const OnboardingScreen = ({navigation}) => {

  return (
    <LinearGradient
      colors={['#000000', '#6dd5fa', '#000000']}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image
        source={Images.child}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to my App</Text>
        <Text style={styles.description}>
          This is the IP App  where you can get the access of the digital resource of all the chapter as well as your project & practical
          file.
        </Text>
        <TouchableOpacity style={styles.button}>
        <Text style={{color:'#ffffff'}} onPress={() => navigation.navigate('Home')} > Let's Go</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageContainer: {
    bottom:-150,
    maxHeight:800,
    maxWidth:500,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'contain'
  },
  image: {
    width: '80%',
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#000000',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default OnboardingScreen;
