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
  ImageBackground,
} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import Login from './Login';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../assets/colors/colors';
import {BASE_URL} from '../config';
import axios from 'axios';

const Account = ({navigation}) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);
  const [newRequest, setNewRequest] = useState(null);
  const [myBook, setMyBook] = useState(0);
  const [favoriBook, setFavoriBook] = useState(0);
  const {logout, userInfo} = useContext(AuthContext);
  const [loginPage, setLoginPage] = useState(false);
  const [showFlag, setShowFlag] = useState(true);
  const getBook = (data, info) => {
    let username = data.username === null ? userInfo.username : data.username;
    let password = data.password === null ? userInfo.password : data.password;

    let request = info == 'mybook' ? newRequest : info;
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
          console.log('kullanici giris yapti'),
          getBook(userInfo, 'mybook'),
          getBook(userInfo, 'favori'),
          setUser(userInfo),
        ]
      : [console.log('kullanici bulunamadi'), setUser(null)];
  }, [userInfo]);
  useEffect(() => {
    user === null ? setLoginPage(true) : setLoginPage(false);
  }, [user]);

  if (loading) {
    return (
      <View style={styles.isLoadingWrapper}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }
  if (loginPage) return <Login></Login>;
  else {
    const renderBookItem = ({item}) => {
      return (
        <TouchableOpacity
          key={item.kitapNo}
          onPress={() =>
            navigation.navigate('Book', {
              screen: 'Details',
              params: {item: item},
            })
          }>
          <View>
            <ImageBackground
              source={{uri: BASE_URL + item.kapakresmi}}
              imageStyle={styles.bookItemImageBg}
              style={[
                styles.bookItemWrapper,
                {marginLeft: item.id === 4 ? 20 : 0},
              ]}>
              <Text numberOfLines={5} style={styles.bookItemTitle}>
                {item.adi}
              </Text>
              <Text style={styles.bookItemAuthor}>{item.yazar}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      );
    };
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
            <MaterialIcons
              name="arrow-back-ios"
              size={30}
              color={'#525750'}></MaterialIcons>
            <MaterialIcons
              name="more-vert"
              size={30}
              color={'#525750'}></MaterialIcons>
          </View>
          <View style={{alignSelf: 'center'}}>
            <View style={styles.profilImage}></View>
            <Image
              source={require('../assets/images/pImages.jpg')}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            {/**ilk defa giriste hata verdigi icin gecici cozum */}
            {user === null ? null : (
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
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  Okunan Kitaplar
                </Text>
                <Text style={{fontSize: 26, fontWeight: '600'}}>
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
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Favori kitaplar
                </Text>
                <Text style={{fontSize: 26, fontWeight: '600'}}>
                  {Object.keys(favoriBook).length}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.bookList}>
            <FlatList
              data={showFlag ? myBook : favoriBook}
              renderItem={renderBookItem}
              keyExtractor={item => item.adi}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{marginTop: 120}}>
            <Button onPress={() => logout(setUser)} title={'Cikis yap'} />
          </View>
        </ScrollView>
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
