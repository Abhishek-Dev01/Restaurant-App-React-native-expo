import { StyleSheet,  View } from 'react-native'
import React from 'react'
import {  ScrollView ,Image, TouchableOpacity, Linking, Text } from 'react-native';
import { Images } from '../config/Images';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {

  const python = () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=ru.iiec.pydroid3&hl=en_IN&gl=US');
  };

  const my = () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.abdo.sqlphone&hl=en_IN&gl=US');
  };


  const contact = () => {
    Linking.openURL('https://wa.me/<9319247928>');
  };

  const Samp11 = () => {
    Linking.openURL('https://drive.google.com/drive/folders/1SM7JrpHnK3aNJXAIodHRjEJGn-DnJNOU?usp=share_link');
  };
  const Samp12 = () => {
    Linking.openURL('https://drive.google.com/drive/folders/1vyOLK4ZCioSO7jTGdLX2AjQg9eNZRcU2?usp=share_link');
  };

  return (
     
    <ScrollView>
      
    <View style={styles.header}>
        <Image source={Images.logo} style={styles.logo} />
      </View>

      <View style={styles.container}>
      <View style={styles.card}>
        <Image source={Images.book} style={styles.courseImage} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>Class 11</Text>
          <Text style={styles.subtitle}>All the Chapters </Text>
          <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Class11')} >
            <MaterialCommunityIcons name="download-box-outline" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>


    <View style={styles.container1}>
      <View style={styles.card}>
        <Image source={Images.book1} style={styles.courseImage} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>Class 12</Text>
          <Text style={styles.subtitle}>All the Chapters </Text>
          <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Class12')} >
            <MaterialCommunityIcons name="download-box-outline" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <View style={styles.container2}>
      <View style={styles.card}>
        <Image source={Images.book} style={styles.courseImage} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>Class 12</Text>
          <Text style={styles.subtitle}>Project Files </Text>
          <TouchableOpacity style={styles.button}  onPress={Samp11} >
            <MaterialCommunityIcons name="download-box-outline" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <View style={styles.container3}>
      <View style={styles.card}>
        <Image source={Images.book} style={styles.courseImage} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>Class 12</Text>
          <Text style={styles.subtitle}>Practical Files </Text>
          <TouchableOpacity style={styles.button}  onPress={Samp12} >
            <MaterialCommunityIcons name="download-box-outline" size={32} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    <Text style={styles.heading}>Donwload App's</Text>

    <ScrollView horizontal={true}>
      <View style={styles.card1}>
        <Image style={styles.cardImage1} source={Images.my} />
        <Text onPress={my} style={styles.cardTitle1}>Download Now</Text>
        
      </View>
      <View style={styles.card1}>
        <Image style={styles.cardImage1} source={Images.pytho} />
        <Text onPress={python} style={styles.cardTitle1}>Download Now</Text>
              </View>
    </ScrollView>


    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 IP App</Text>
      <Text style={styles.footerText}>Developed By : Abhishek Singh</Text>
    </View>

    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  container1: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:-20,
  },
  container2: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:-40,
  },
  container3: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    bottom:-60,
    marginBottom:70
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop:30,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center'
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    textAlign:'center'
  },
  button: {
    backgroundColor: '#f4511e',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  image: {
    height: 200,
    width:200,
    resizeMode:'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  
  image1: {
    maxWidth:178,    
    maxHeight:200,
    resizeMode:'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
 
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 20,
    textShadowColor: '#FFFF00',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 3,
  },
  footer: {
    backgroundColor: '#2C2C2C',
    paddingVertical: 20,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  card1: {
    width: 250,
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage1: {
    width: '100%',
    height: 200,
    resizeMode:'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle1: {
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'dotted',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: -10,
    textAlign:'center'
  },
  cardText1: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
   footerText: {
    color: '#fff',
    fontSize: 14,
  },
})
