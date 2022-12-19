import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Btn from './Btn';
import {darkGreen, green} from './Colors';
import Field from './Field';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';
export default function singupPage(props) {
  const {register, newUserInfo} = useContext(AuthContext);
  const [page, setPage] = useState('first');
  const [newUser, setNewUser] = useState({
    email: null,
    name: null,
    surname: null,
    password: null,
    birthdate: null,
    gender: null,
  });
  const navigation = useNavigation();
  const [isSamePassword, setIsSamePassword] = useState('false');
  const [info, setInfo] = useState(null);

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
        <Field
          placeholder="Ad"
          onChangeText={queryText => setNewUser({...newUser, name: queryText})}
        />
        <Field
          placeholder="Soyad"
          onChangeText={queryText =>
            setNewUser({...newUser, surname: queryText})
          }
        />

        <Field
          placeholder="E-posta "
          keyboardType={'email-address'}
          onChangeText={queryText => setNewUser({...newUser, email: queryText})}
        />
        <Text style={{color: 'red'}}>
          {newUserInfo === null ? null : newUserInfo.info}
        </Text>
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
            register(newUser, setPage);
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
        <Field
          placeholder="Kullanici adi "
          keyboardType={'email-address'}
          onChangeText={queryText =>
            setNewUser({...newUser, username: queryText})
          }
        />
        <Field
          placeholder="Sifre"
          secureTextEntry={true}
          onChangeText={queryText =>
            setNewUser({...newUser, password: queryText})
          }
        />
        <Field
          placeholder="Tekrar Sifre"
          secureTextEntry={true}
          onChangeText={queryText =>
            newUser.password == queryText
              ? setIsSamePassword(true)
              : setIsSamePassword(false)
          }
        />
        <Field
          placeholder="Dogum tarihi"
          keyboardType={'numeric'}
          onChangeText={query => setNewUser({...newUser, birthdate: query})}
        />
        <Field
          placeholder="Cinsiyet"
          onChangeText={query => setNewUser({...newUser, gender: query})}
        />
        <Text style={{color: 'red'}}>{info}</Text>
        <Text style={{color: 'red'}}>{newUserInfo.info}</Text>
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
                isSamePassword
                  ? register(newUser, setPage)
                  : setInfo('**Girilen sifreler ayni degil');
              }}
              Width={150}
            />
          </View>
        </View>
      </View>
    );
  }
}
