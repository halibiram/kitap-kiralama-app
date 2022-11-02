import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';

const Background = ({children}) => {
  return (
    <View>
      <ImageBackground
        source={require('./loginBackground.jpg')}
        style={{height: '100%'}}
      />
      <View style={{position: 'absolute'}}>{children}</View>
    </View>
  );
};
const style = StyleSheet.create({});

export default Background;
