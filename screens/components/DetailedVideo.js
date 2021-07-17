import React from 'react';
import { Text, View, StyleSheet,Image,TouchableWithoutFeedback } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    borderRadius: 4
  },
  fullcircle: {
    backgroundColor: '#49a09d',
    height: 70,
    borderRadius: 75,
    width: 68,
    opacity: 0.2,
    marginTop: 65,
    paddingLeft: 10,
    marginHorizontal: 50,
    position: 'absolute'
   }
})

export default DetailedVideo = (props) => {
  return (
<TouchableWithoutFeedback onPress={props.onPress}> 
    <View>  
    <View style={styles.center}>
    <Image source={{uri:props.imageUri}} style ={{resizeMode:'cover',width:350, height:200,backgroundColor:'#49a09d'}} />
    <Image source={require('../../assets/playicon.png')} style={{marginLeft:190,marginTop:59,height:90,width:90,position:'absolute',alignContent:'center', opacity:1, paddingLeft:20}} />
    {/* <EvilIcons name="play" size={100} color='#0b0e34' iconStyle={{opacity:0.1, marginLeft:190}} style={{marginLeft:190,marginTop:59,height:150,width:150,position:'absolute',alignContent:'center', opacity:0.9, paddingLeft:20}} /> */}
    <View style={styles.fullcircle} />
    </View>
    <Text style={{fontSize:15, marginLeft:19}}>{props.title}</Text>
    </View>
 </TouchableWithoutFeedback>
  );
}