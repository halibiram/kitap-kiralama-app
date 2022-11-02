import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Background from '../assets/loginScreen/Background';
import Btn from '../assets/loginScreen/Btn';
import {darkGreen, green} from '../assets/loginScreen/Colors';
import Field from '../assets/loginScreen/Field';
import {useNavigation} from '@react-navigation/native';

const Singup = () => {
  const navigation = useNavigation();
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
        <View
          style={{
            backgroundColor: 'white',
            height: 800,
            width: 420,
            borderTopLeftRadius: 140,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="Ad" />
          <Field placeholder="Soyad" />
          <Field placeholder="Dogum tarihi" keyboardType={'numeric'} />
          <Field
            placeholder="E-posta / Kullanici adi"
            keyboardType={'email-address'}
          />
          <Field placeholder="Sifre" secureTextEntry={true} />
          <Field placeholder="Tekrar Sifre" secureTextEntry={true} />
          {/* <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 10,
              marginBottom: 130,
            }}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Sifreyi unuttun mu?
            </Text>
          </View> */}
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Hesap Aç"
            Press={() => {
              alert('Hesap açma denemesi yapildi.');
              navigation.navigate('Singin');
            }}
          />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              Hesabın var mı ?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Singin')}>
              <Text style={{color: darkGreen, fontWeight: 'bold', font: 16}}>
                Giriş yap !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};
const style = StyleSheet.create({});

export default Singup;
