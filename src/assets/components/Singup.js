import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Background from '../../assets/loginScreen/Background';

import SingupPage from '../../assets/loginScreen/singupPage';
const Singup = () => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 420}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 60,
          }}>
          Hesap Aç
        </Text>
        <Text
          style={{
            color: 'white',
            marginBottom: 40,
            fontWeight: 'bold',
            fontSize: 16,
            marginTop: -55,
          }}>
          Yeni bir hesap olustur !
        </Text>
        <SingupPage />
      </View>
    </Background>
  );
};
const style = StyleSheet.create({});

export default Singup;
