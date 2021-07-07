import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from "react-native"
import StarRating from 'react-native-star-rating';


class Featured extends Component {
    render() {
      return (
         <TouchableWithoutFeedback onPress={this.props.onPress}> 
        <View style={{ height: 130, width: 130, marginLeft:20, borderWidth:0.5}}>
        <View style={{flex:2}}>
          <Image source={this.props.imageUri} 
          style ={{flex:1,width:null,height:null, resizeMode:'cover'}}
          />
        </View>
        <View style={{flex:1, paddingLeft: 10, paddingTop:10}}>
          <Text>{this.props.name}</Text>
        </View>
        <View style={{flex:2, width:15, marginLeft: 10}}>
        <StarRating
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        starSize={13}
        disabled={false}
        maxStars={5}
        rating={3}
      />
      </View>
      </View>
      </TouchableWithoutFeedback>
      )
    };
}

export default Featured;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    }
});