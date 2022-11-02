import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Background from '../assets/loginScreen/Background';
import Btn from '../assets/loginScreen/Btn';
import {darkGreen, green} from '../assets/loginScreen/Colors';
import Field from '../assets/loginScreen/Field';
import {useNavigation} from '@react-navigation/native';

const Singin = () => {
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
          Giriş Yap
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 800,
            width: 420,
            borderTopLeftRadius: 140,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: darkGreen}}>
            Hos Geldin!
          </Text>
          <Text
            style={{
              fontSize: 17,
              color: 'gray',
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Hesabina giris yap!
          </Text>
          <Field
            placeholder="E-posta / Kullanici adi"
            keyboardType={'email-address'}
          />
          <Field placeholder="Sifre" secureTextEntry={true} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 10,
              marginBottom: 130,
            }}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Sifreyi unuttun mu?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Giris Yap"
            Press={() => alert('Giris denemesi yapildi.')}
          />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              Hesabin yok mu ?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Singup')}>
              <Text style={{color: darkGreen, fontWeight: 'bold', font: 16}}>
                Kayit ol !
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};
const style = StyleSheet.create({});

export default Singin;
