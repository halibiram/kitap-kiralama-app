import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState, createContext} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import {BASE_URL} from '../config';

import {registerAsset} from 'react-native-web/dist/cjs/modules/AssetRegistry';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsloading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [newUserInfo, setNewUserInfo] = useState({status: null, info: ''});

  const register = (newuser, setPage) => {
    const {email, name, surname, username, password, birthdate, gender} =
      newuser;
    setIsloading(true);
    axios
      .post(BASE_URL + '/api/register', {
        email,
        name,
        surname,
        username,
        password,
        birthdate,
        gender,
      })
      .then(res => {
        setNewUserInfo(res.data);
        if (res.data.statusCode == 'emailNotFound') {
          setPage('second');
        }
      });
  };
  const login = user => {
    const {username, password} = user;
    setIsloading(true);
    axios
      .post(BASE_URL + '/api/login', {
        username,
        password,
      })
      .then(res => {
        setUserInfo({
          userId: res.data.kulno,
          name: res.data.adi,
          surname: res.data.soyadi,

          username: res.data.kuladi,
          password: res.data.sifre,
        });
        Alert.alert('Hos Geldin!', res.data.adi, [
          {text: 'Hos bulduk', onPress: () => console.log('Basildi')},
        ]);
        AsyncStorage.setItem(
          'user',
          JSON.stringify({
            userId: res.data.kulno,
            name: res.data.adi,
            surname: res.data.soyadi,

            username: res.data.kuladi,
            password: res.data.sifre,
          }),
        )
          .then(json => console.log('basariyla veri kayit edildi'))
          .catch(err =>
            console.log('veri kayit edilirken hata olustu **' + err),
          );
      })

      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          //  Alert.alert('Hata', error.response.data.error);
          setErrorMessage('* ' + error.response.data.error);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  };
  const logout = setUser => {
    setIsloading(true);
    setUser(null);
    AsyncStorage.removeItem('user');
    setIsloading(false);
  };

  const isLoadingIn = async () => {
    try {
      setIsloading(true);

      await AsyncStorage.getItem('user')
        .then(req => JSON.parse(req))
        .then(data => setNewUserInfo(data))
        .catch(err => console.log('veri hatasi **' + err));

      setIsloading(false);
    } catch (error) {
      console.log('isLogged is error --> ' + error);
    }
  };
  useEffect(() => {
    isLoadingIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        setErrorMessage,
        register,
        userInfo,
        isLoading,
        errorMessage,
        newUserInfo,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
