import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Btn from './Btn';
import {darkGreen, green} from './Colors';
import Field from './Field';
import {useNavigation} from '@react-navigation/native';

export default function singupPage(props) {
  const [page, setPage] = useState('first');
  const navigation = useNavigation();
  if (page == 'first') {
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: 800,
          width: 420,
          borderTopLeftRadius: 140,
          paddingTop: 100,
          alignItems: 'center',
        }}>
        <Field placeholder="Ad" />
        <Field placeholder="Soyad" />

        <Field
          placeholder="E-posta / Kullanici adi"
          keyboardType={'email-address'}
        />

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            Hesap acarak kullanici
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                color: darkGreen,
                fontWeight: 'bold',
                font: 16,
                textAlign: 'center',
              }}>
              {' '}
              Kural&Sartlarini
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}> ve</Text>
          <TouchableOpacity>
            <Text style={{color: darkGreen, fontWeight: 'bold', font: 16}}>
              {' '}
              Gizlilik Politikasi
            </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>
            {' '}
            Kabul etmis sayilirsin.
          </Text>
        </View>
        <Btn
          textColor="white"
          bgColor={darkGreen}
          btnLabel="Hesap Aç"
          Width={350}
          Press={() => {
            setPage('second');
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
    );
  } else if (page == 'second') {
    return (
      <View
        style={{
          backgroundColor: 'white',
          height: 800,
          width: 420,
          borderTopLeftRadius: 140,
          paddingTop: 100,
          alignItems: 'center',
        }}>
        <Field placeholder="Sifre" secureTextEntry={true} />
        <Field placeholder="Tekrar Sifre" secureTextEntry={true} />
        <Field placeholder="Dogum tarihi" keyboardType={'numeric'} />
        <Field placeholder="Cinsiyet" />
        <View style={{flexDirection: 'row'}}>
          <Btn
            textColor="white"
            bgColor="orange"
            btnLabel="<- Geri"
            Press={() => {
              setPage('first');
            }}
            Width={150}
          />
          <View style={{marginLeft: 20}}>
            <Btn
              textColor="white"
              bgColor={darkGreen}
              btnLabel="Kayit ol"
              Press={() => {
                navigation.navigate('Singin');
              }}
              Width={150}
            />
          </View>
        </View>
      </View>
    );
  }
}
