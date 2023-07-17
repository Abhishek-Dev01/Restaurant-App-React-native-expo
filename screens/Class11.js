import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Button,  Icon } from 'react-native-elements';
import { Images } from '../config/Images';

const Class11 = () => {


  const openVideo = () => {
    Linking.openURL('https://www.youtube.com/watch?v=2hI-MLiLN1A');
  };

  const class11 = () => {
    Linking.openURL('https://drive.google.com/drive/folders/10lDSAxbYFqISxEBWSkyP7S7syezwxzBR?usp=share_link');
  };

 //chapter 2
  const Chp2 = () => {
    Linking.openURL('https://youtube.com/watch?v=uWLlMsw7lEA');
  };
  const chp2note = () => {
    Linking.openURL('https://drive.google.com/drive/folders/1XGgu3oGxUC8lgvJN1z_Qrejktey5_ZSz?usp=share_link');
  };

//chapter 3 

const chp3 = () => {
  Linking.openURL('https://www.youtube.com/watch?v=WmIzGNWBjrI');
};
const chp3note = () => {
  Linking.openURL('https://drive.google.com/drive/folders/1pmobNh8OFukWkTYcotKaX5kveeWinsYo?usp=share_link');
};

//chapter 4
const chp4 = () => {
  Linking.openURL('https://www.youtube.com/watch?v=pQgULl8WLMQ');
};
const chp4note = () => {
  Linking.openURL('https://drive.google.com/drive/folders/1nMbXIWNDPqBG8lwSEi8JWQUlN4YA9sWY?usp=share_link');
};

//chapter 5
const chp5 = () => {
  Linking.openURL('https://www.youtube.com/watch?v=I8Rtu17leGw');
};
const chp5note = () => {
  Linking.openURL('https://drive.google.com/drive/folders/1KEoV4zAsEGAffUE-5xejhPI2UgZyXj0R?usp=share_link');
};

//chapter 6
const chp6 = () => {
  Linking.openURL('https://www.youtube.com/watch?v=NlZ40LHp2IY');
};
const chp6note = () => {
  Linking.openURL('https://drive.google.com/drive/folders/1BevyacV_4x-AHIlD7NvkZzYD2Euy7Be1?usp=share_link');
};

//chapter 7
const chp7 = () => {
  Linking.openURL('https://www.youtube.com/watch?v=OUTkaLwakjs');
};
const chp7note = () => {
  Linking.openURL('https://drive.google.com/drive/folders/1UdiAy6jyN1I6Xnxv67cgdYABNOFywIcr?usp=share_link');
};

//chapter 8
const chp8 = () => {
  Linking.openURL('https://www.youtube.com/watch?v=fMVpOPiVmCU');
};
const chp8note = () => {
  Linking.openURL('https://drive.google.com/drive/folders/1l4X56GHNrJpGGnA462i6Jtv9uUMyl53A?usp=share_link');
};

const Samp = () => {
  Linking.openURL('https://drive.google.com/drive/folders/1WPjbDIZwQDzdbCk1IuTi_a0joZKbSNKB?usp=share_link');
};
const contact = () => {
  Linking.openURL('https://wa.me/<9319247928>');
};

  return (
    <ScrollView>
    <View>
   
    <Card containerStyle={{borderRadius: 20,shadowColor: 'yellow', shadowOpacity: 0.9, shadowRadius: 2, elevation: 6,}}>
     <Card.Title style={{fontSize:36, fontStyle:'normal', fontWeight:'800', color: '#000000'}}>Class 11</Card.Title>
     <Card.Divider />
     <Card.Image source={Images.book} style={{resizeMode:'contain'}} />
     <Card.FeaturedSubtitle></Card.FeaturedSubtitle>
     <Card.Divider />
     <Text style={{marginBottom: 20, textAlign:'center',fontSize: 16, color: '#666666'}}>
 Class 11 Sample Papers.
     </Text>
     <Button onPress={Samp}
       icon={<Icon name='code' backgroundColor='red' color='#ffffff' />}
       buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#ff0000'}}
       title='VIEW NOW' />
   </Card>


  <Text style={styles.text3}>Introduction To Computer Organistion</Text>
   
   <SafeAreaView style={{padding:15, marginTop:-50}}>
   <Button  title='Watch Video' onPress={openVideo}/>
   <Text onPress={class11} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>

   </SafeAreaView>


   <Text style={styles.text3}>Introduction To Python</Text>
   
   <SafeAreaView style={{padding:15, marginTop:-50}}>
   <Button  title='Watch Video' onPress={Chp2}/>

   <Text onPress={chp2note} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>
   </SafeAreaView>


   <Text style={styles.text3}>Basic of Python</Text>
   
   <SafeAreaView style={{padding:15, marginTop:-50}}>
   <Button  title='Watch Video' onPress={chp3}/>
   <Text onPress={chp3note} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>
   </SafeAreaView>

   <Text style={styles.text3}>Sequence and Iteration</Text>
   
   <SafeAreaView style={{padding:15, marginTop:-50}}>
   <Button  title='Watch Video' onPress={chp4}/>
   <Text onPress={chp4note} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>
   </SafeAreaView>

  
   
   <Text style={styles.text3}>List</Text>
   
   <SafeAreaView style={{padding:15, marginTop:-50}}>
   <Button  title='Watch Video' onPress={chp5}/>
   <Text onPress={chp5note} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>
   </SafeAreaView>

   
   <Text style={styles.text3}>Dictionary</Text>
   
   <SafeAreaView style={{padding:15, marginTop:-50}}>
   <Button  title='Watch Video' onPress={chp6}/>
   <Text onPress={chp6note} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>
   </SafeAreaView>

     
   <Text style={styles.text3}>Mysql</Text>
   
   <SafeAreaView style={{padding:15, marginTop:-50}}>
   <Button  title='Watch Video' onPress={chp7}/>
   <Text onPress={chp7note} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>
   </SafeAreaView>

   
   <Text style={styles.text3}>Emerging Trends</Text>
   
   <SafeAreaView style={{padding:15, marginTop:-50}}>
   <Button  title='Watch Video' onPress={chp8}/>
   <Text onPress={chp8note} style={{bottom:-10, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>
 
   </SafeAreaView>

   <SafeAreaView>
     
   <View style={{ backgroundColor: '#383838', paddingTop: 10, paddingBottom: 10 }}>
     <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
       <Text style={{ color: '#ffffff', marginRight: 10 }} onPress={contact} >Developed by</Text>
       <Text style={{ color: '#00a1e4', fontWeight: 'bold' }} onPress={contact}>Abhishek Singh</Text>
     </View>
     <Text style={{ color: '#ffffff', fontSize: 12, textAlign:'center' }}>© 2023 All rights reserved</Text>
   </View>
   </SafeAreaView>


     
     </View>

     </ScrollView>

  )
}

export default Class11

const styles = StyleSheet.create({
  container:{
  alignItems: 'center',
  justifyContent: 'center',
},
video: {
  width: 300,
  height: 300,
},
 image1:{
  resizeMode:'contain',
  height:400,
  width:400,
  marginTop:-40,
 },
 text1:{
  fontSize:30,
  fontWeight:'bold',
  color:'black',
  textAlign:'center',
  marginTop:10,
  marginBottom:10
 },
 text2:{
  fontSize:30,
  fontWeight:'bold',
  color:'black',
  textDecorationLine:'underline',
  textAlign:'center',
  marginTop:-70,
  marginBottom:10,
 },

 
 text3:{
  fontSize:30,
  fontWeight:'bold',
  color:'darkviolet',
  textAlign:'center',
  marginTop:20,
  marginBottom:10
 },
});