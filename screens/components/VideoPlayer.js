import React, { Component } from 'react';
import { Video } from 'expo-av';
import { View, Dimensions} from 'react-native';
export default class VideoPlayer extends Component {
    render() {
        return (
            <View>
                <Video
                source={{uri:this.props.route.params.param}}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                useNativeControls
                resizeMode='contain'
                shouldPlay
                isLooping={false}
                style={{
                  height: '100%',
                  width: '100%'
                }}
                /> 
           </View>
        );
    }
}