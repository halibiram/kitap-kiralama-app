import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState, createContext} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import {BASE_URL} from '../../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsloading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [newUserInfo, setNewUserInfo] = useState({status: null, info: ''});
  const [userData, setUserData] = useState(null);
  const [checkData, setCheckData] = useState(false);

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
  const login = (user, setSuccessLogin) => {
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
          picture: res.data.kulResim,
        });
        setErrorMessage(null); //Basari giriste hata mesajini sifirlamak icin

        AsyncStorage.setItem(
          'user',
          JSON.stringify({
            userId: res.data.kulno,
            name: res.data.adi,
            surname: res.data.soyadi,

            username: res.data.kuladi,
            password: res.data.sifre,
            picture: res.data.kulResim,
          }),
        )
          .then(json => {
            console.log('basariyla veri kayit edildi');
            setSuccessLogin(true);
            setIsloading(false);
          })
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
    setIsloading(true);
    console.log('Kayitli kullanici getirilmeye calisiliyor');
    await AsyncStorage.getItem('user')
      .then(req => JSON.parse(req))
      .then(data => setUserInfo(data))
      .catch(err => console.log('veri hatasi **' + err));

    setIsloading(false);
  };
  //uygulama acildiginda kayitli kullanici kontrol eden tetikleyici
  useEffect(() => {
    isLoadingIn();
  }, []);
  //kullani giris yaptiginda kitap datalarini cekmek icin
  useEffect(() => {
    if (userInfo) {
      const request = {
        username: userInfo.username,
        password: userInfo.password,
        request: 'all',
      };

      axios
        .post(BASE_URL + '/api/mybook', request)
        .then(responseData => {
          setUserData(responseData.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [userInfo, checkData]);
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        setErrorMessage,
        register,
        setCheckData,
        checkData,
        userData,
        userInfo,
        isLoading,
        errorMessage,
        newUserInfo,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
