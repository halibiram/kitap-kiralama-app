import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';

import Background from '../assets/loginScreen/Background';
import Btn from '../assets/loginScreen/Btn';
import {darkGreen, green} from '../assets/loginScreen/Colors';
import Field from '../assets/loginScreen/Field';

import {AuthContext} from '../context/AuthContext';

const Singin = props => {
  const {login, errorMessage, setErrorMessage, userInfo} =
    useContext(AuthContext);
  // const navigation = useNavigation();
  const [user, setUser] = useState({username: null, password: null});
  const [successLogin, setSuccessLogin] = useState(false);
  function gotoAccountScreen() {
    props.navigation.navigate('Account');
  }
  useEffect(() => {
    console.log('Kullanici basariyla giris yapti');

    successLogin && gotoAccountScreen();
  }, [successLogin]);
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
            onChangeText={queryText => setUser({...user, username: queryText})}
          />
          <Field
            placeholder="Sifre"
            secureTextEntry={true}
            onChangeText={queryText => setUser({...user, password: queryText})}
          />
          {errorMessage !== null && (
            <Text style={{color: 'red'}}>{errorMessage}</Text>
          )}
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 10,
              marginBottom: 80,
            }}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Sifreyi unuttun mu?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Giris Yap"
            Press={() => {
              login(user, setSuccessLogin);
            }}
            Width={350}
          />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              Hesabin yok mu ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Singup')}>
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
