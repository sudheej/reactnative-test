import React, { Component } from 'react';
import { Video } from 'expo-av';
import { View, Dimensions} from 'react-native';
import { Container } from 'native-base';
import { NativeBaseProvider } from 'native-base';
export default class VideoPlayer extends Component {
    render() {
        return (

            <View>
                <Video
                source={require('../../assets/video.mp4')}
                style={{width:300,height:500}}
                /> 
           </View>

        );
    }
}