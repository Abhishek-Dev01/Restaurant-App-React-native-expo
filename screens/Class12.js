import { StyleSheet, Text, View,Linking } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card,  Button,  Icon } from 'react-native-elements';
import { Images } from '../config/Images';

const Class12 = () => {
// Chapter 1
const openVideo = () => {
  Linking.openURL('https://www.youtube.com/watch?v=qaCai1CZvmU&list=PLY_LeZE9HuLHxHRsiiekYs4CjvCuPY2yw');
};

const class12 = () => {
  Linking.openURL('https://drive.google.com/drive/folders/1f5g1fFZ6bfOQqlDZwc_anl7JGwRPA6tX?usp=share_link');
};

//chapter 2
const Chp2 = () => {
  Linking.openURL('https://www.youtube.com/watch?v=zmTX-VWGpNg');
};
const chp2note = () => {
  Linking.openURL('https://drive.google.com/drive/folders/1R9bLwRvHiy34J8Zc_OQ05bhOS7qPuTVm?usp=share_link');
};

//chapter 3 

const chp3 = () => {
Linking.openURL('https://www.youtube.com/watch?v=L3ZzkOTDins');
};
const chp3note = () => {
Linking.openURL('https://drive.google.com/drive/folders/1SUwP2vcKCw8faDA9iD5qfJ7BlzRXHZqR?usp=share_link');
};

//chapter 4
const chp4 = () => {
Linking.openURL('https://www.youtube.com/watch?v=ji-LvTONojM');
};
const chp4note = () => {
Linking.openURL('https://drive.google.com/drive/folders/1V2KniEqwkgWQVoXznd6ycREFF569k1YY?usp=share_link');
};

//chapter 5
const chp5 = () => {
Linking.openURL('https://www.youtube.com/watch?v=lF4ccYPZ6AQ');
};
const chp5note = () => {
Linking.openURL('https://drive.google.com/drive/folders/1YNYOpk96ruS5i7aB9MZ5jwLlHaoUMKnl?usp=share_link');
};
const Samp = () => {
  Linking.openURL('https://drive.google.com/drive/folders/1Y4HsW_1OxEyk-qKh5rJF3MEVgk3dIOtn?usp=share_link');
};
const contact = () => {
  Linking.openURL('https://wa.me/<9319247928>');
};
 


  return (
  
    // First View Section Having the logo and logout button 
<ScrollView>
     <View>


     <Card containerStyle={{borderRadius: 20,shadowColor: 'yellow', shadowOpacity: 0.9, shadowRadius: 2, elevation: 6,}}>
      <Card.Title style={{fontSize:36, fontStyle:'normal', fontWeight:'800', color: '#000000'}}>Class 12</Card.Title>
      <Card.Divider />
      <Card.Image source={Images.book1} style={{resizeMode:'contain'}} />
      <Card.FeaturedSubtitle></Card.FeaturedSubtitle>
      <Card.Divider />
      <Text style={{marginBottom: 20, textAlign:'center',fontSize: 16, color: '#666666'}}>
  Class 12  Sample Papers.
      </Text>
      <Button onPress={Samp}
        icon={<Icon name='code' backgroundColor='red' color='#ffffff' />}
        buttonStyle={{borderRadius: 20, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#ff0000'}}
        title='VIEW NOW' />
    </Card>


   <Text style={styles.text3}>Python Pandas</Text>
    
    <SafeAreaView style={{padding:15, marginTop:-50}}>
    <Button  title='Watch Video' onPress={openVideo}/>
    
    <Text onPress={class12} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>

    </SafeAreaView>

    
    <Text style={styles.text3}>Data Visulization using Mataplotlib</Text>
    
    <SafeAreaView style={{padding:15, marginTop:-50}}>
    <Button  title='Watch Video' onPress={Chp2}/>
    <Text onPress={chp2note} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>

    </SafeAreaView>

    <Text style={styles.text3}>Database Query using SQL </Text>
    
    <SafeAreaView style={{padding:15, marginTop:-50}}>
    <Button  title='Watch Video' onPress={chp4}/>
    <Text onPress={chp4note} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>

    </SafeAreaView>


    <Text style={styles.text3}>Computer Networks</Text>
    
    <SafeAreaView style={{padding:15, marginTop:-50}}>
    <Button  title='Watch Video' onPress={chp3}/>
    <Text onPress={chp3note} style={{bottom:-20, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>

    </SafeAreaView>

   
    
    <Text style={styles.text3}>Societal Imapacts</Text>
    
    <SafeAreaView style={{padding:15, marginTop:-50}}>
    <Button  title='Watch Video' onPress={chp5}/>
    <Text onPress={chp5note} style={{bottom:-10, textAlign:'center', fontSize:22, fontWeight:'900', color:'red'}}>Download Notes</Text>

    </SafeAreaView>

 
      </View>

      <View style={{ backgroundColor: '#383838', paddingTop: 10, paddingBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
        <Text style={{ color: '#ffffff', marginRight: 10 }} onPress={contact} >Developed by</Text>
        <Text style={{ color: '#00a1e4', fontWeight: 'bold' }} onPress={contact}>Abhishek Singh</Text>
      </View>
      <Text style={{ color: '#ffffff', fontSize: 12, textAlign:'center' }}>© 2023 All rights reserved</Text>
    </View>


      </ScrollView>
 
    )
}

export default Class12

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
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
    fontSize:26,
    fontWeight:'bold',
    color:'darkviolet',
    textAlign:'center',
    marginTop:20,
    marginBottom:10
   },
});
