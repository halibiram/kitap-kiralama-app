import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import Login from './Login';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BookCard from './BookCard';
import ChoosePopUp from './ChoosePopUp';

import {BASE_URL} from '../../config';
import axios from 'axios';

import useChoosePhoto from '../hooks/useChoosePhoto';

const Account = ({navigation}) => {
  const [filePath, setFilePath] = useState({});
  const {captureImage, chooseFile} = useChoosePhoto(setFilePath);

  const [popUpVisible, setPopUpVisible] = useState(false);

  const [user, setUser] = useState(null);

  const [myBook, setMyBook] = useState(0);
  const [favoriBook, setFavoriBook] = useState(0);
  const {logout, userInfo, userData, login, isLoading} =
    useContext(AuthContext);
  const [loginPage, setLoginPage] = useState(false);
  const [showFlag, setShowFlag] = useState(true);
  const getBook = (data, info) => {
    let username = data.username === null ? userInfo.username : data.username;
    let password = data.password === null ? userInfo.password : data.password;

    let request = info == 'mybook' ? null : info;
    axios
      .post(BASE_URL + '/api/mybook', {
        username,
        password,
        request,
      })
      .then(res => {
        info === 'favori' ? setFavoriBook(res.data) : setMyBook(res.data);

        // if (res.data[0].statusCode == '404') {
        //   info === 'favori' ? setFavoriBook(null) : setMyBook(null);
        // }
      });
  };

  useEffect(() => {
    userInfo !== null
      ? [
          getBook(userInfo, 'mybook'),
          getBook(userInfo, 'favori'),
          !user && setUser(userInfo),
        ]
      : [console.log('kullanici bulunamadi'), setUser(null)];
  }, [userInfo, showFlag, userData]);
  useEffect(() => {
    user === null ? setLoginPage(true) : setLoginPage(false);
  }, [user]);
  function createRandomName() {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomName = '';

    for (let i = 0; i < 20; i++) {
      let index = Math.floor(Math.random() * characters.length);
      randomName += characters[index];
    }

    return randomName + '.jpg';
  }

  useEffect(() => {
    try {
      let localUri = filePath.uri;

      let filename = localUri.split('/').pop();

      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      let formData = new FormData();

      formData.append('image', {
        uri: localUri,
        name: createRandomName(),
        type,
      });
      formData.append('userId', 6);

      axios
        .post(
          BASE_URL + '/api/upload',
          formData,

          {
            headers: {'Content-Type': 'multipart/form-data'},
          },
        )
        .then(res => {
          console.log(res);
          login(userInfo, setShowFlag);
        });
    } catch (err) {
      console.log(err);
    }

    return setPopUpVisible(false);
  }, [filePath]);
  if (isLoading) {
    return (
      <View style={styles.isLoadingWrapper}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }
  if (loginPage) return <Login></Login>;
  else {
    return (
      // <View>

      //   <Text style={{fontSize: 25, fontWeight: 'bold', color: 'darkred'}}>
      //     Hos Geldin {userInfo.name}
      //   </Text>
      //   <Button onPress={() => logout()} title={'Cikis yap'} />
      // </View>

      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <TouchableOpacity>
              <MaterialIcons
                name="arrow-back-ios"
                size={30}
                color={'#525750'}
                onPress={() => navigation.navigate('Home')}></MaterialIcons>
            </TouchableOpacity>

            <MaterialIcons
              name="more-vert"
              size={30}
              color={'#525750'}></MaterialIcons>
          </View>

          <View style={{alignSelf: 'center'}}>
            <View style={styles.profilImage}></View>
            <Image
              source={
                userInfo.picture
                  ? {uri: BASE_URL + '/api/userPhoto/' + userInfo.picture}
                  : require('../assets/images/profil.jpg')
              }
              style={styles.image}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setPopUpVisible(true);
              }}>
              <View style={{marginBottom: 20, marginTop: -40, marginLeft: 130}}>
                <MaterialIcons
                  color={'#525750'}
                  size={45}
                  name="add-photo-alternate"
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.infoContainer}>
            {/**ilk defa giriste hata verdigi icin gecici cozum */}
            {user && (
              <Text style={styles.text}>{user.name + ' ' + user.surname}</Text>
            )}
          </View>

          <View style={styles.statsContainer}>
            <TouchableOpacity
              onPress={() => {
                setShowFlag(true);
              }}>
              <View
                style={[
                  styles.statsBox,
                  {
                    borderColor: '#DFD8C8',
                    borderRightWidth: 1,
                    marginRight: 10,
                  },
                  showFlag && {backgroundColor: 'green'},
                ]}>
                <Text
                  style={[
                    showFlag && {color: 'white'},
                    {fontSize: 16, fontWeight: 'bold'},
                  ]}>
                  Mevcut Kitaplar
                </Text>
                <Text
                  style={[
                    showFlag && {color: 'white'},
                    {fontSize: 26, fontWeight: '600', marginTop: 20},
                  ]}>
                  {Object.keys(myBook).length === null
                    ? 0
                    : Object.keys(myBook).length}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setShowFlag(false);
              }}>
              <View
                style={[
                  styles.statsBox,
                  !showFlag && {backgroundColor: 'green'},
                ]}>
                <Text
                  style={[
                    !showFlag && {color: 'white'},
                    {fontSize: 16, fontWeight: 'bold'},
                  ]}>
                  Okunan&Favori
                </Text>
                <Text
                  style={[
                    !showFlag && {color: 'white'},
                    {fontSize: 16, fontWeight: 'bold'},
                  ]}>
                  kitaplar
                </Text>
                <Text
                  style={[
                    !showFlag && {color: 'white'},
                    {fontSize: 26, fontWeight: '600'},
                  ]}>
                  {Object.keys(favoriBook).length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bookList}>
            <FlatList
              data={showFlag ? myBook : favoriBook}
              renderItem={({item}) =>
                BookCard(item, BASE_URL, navigation, false)
              }
              keyExtractor={(item, index) => {
                return index.toString();
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{marginTop: 120}}>
            <Button onPress={() => logout(setUser)} title={'Cikis yap'} />
          </View>
        </ScrollView>
        <View style={{}}>
          <ChoosePopUp
            visible={popUpVisible}
            setVisible={setPopUpVisible}
            capturePhoto={captureImage}
            choosePhotoFile={chooseFile}
          />
        </View>
      </SafeAreaView>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  image: {width: 180, height: 180, borderRadius: 300},
  profilImage: {
    marginTop: 20,
  },
  isLoadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marjinTop: 16,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
    width: 190,
    backgroundColor: 'white',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 30,
  },

  bookList: {marginHorizontal: 10},
  bookItemImageBg: {width: 130, height: 200, borderRadius: 12},
  bookItemWrapper: {
    marginTop: 40,

    marginRight: 12,
    width: 130,
    height: 200,
  },
  bookItemTitle: {
    marginTop: 152,
    height: 30,
    fontSize: 11,
    color: 'white',
    backgroundColor: '#0D253Ca0',
    paddingHorizontal: 5,
  },
  bookItemAuthor: {
    fontSize: 8,
    padding: 3,

    color: 'white',

    backgroundColor: '#0D253Cf6',
    paddingHorizontal: 5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});
export default Account;
