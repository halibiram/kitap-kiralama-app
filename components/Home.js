import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  TouchableNativeFeedback,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../assets/colors/colors';

Feather.loadFont();

const Home = ({navigation}) => {
  const [searchInput, setSearchInput] = useState('');
  const [populerBook, setPopulerBook] = useState([]);
  const [lastBooks, setLastBooks] = useState([]);

  // get populerBooks
  useEffect(() => {
    fetch('http://172.26.32.1:8090/api/book')
      .then(res => res.json())
      .then(data => {
        setPopulerBook(data);
      });
  }, []);
  useEffect(() => {
    fetch('http://172.26.32.1:8090/api/book?last=last')
      .then(res => res.json())
      .then(data => {
        setLastBooks(data);
      });
  }, []);

  const renderPopulerBookItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.kitapNo}
        onPress={() => navigation.navigate('Details', {item: item})}>
        <View>
          <ImageBackground
            source={{uri: item.kapakresmi}}
            imageStyle={styles.populerBookItemImageBg}
            style={[
              styles.populerBookItemWrapper,
              {marginLeft: item.id === 1 ? 20 : 0},
            ]}>
            <Text style={styles.populerBookItemTitle}>{item.adi}</Text>
            <Text style={styles.populerBookItemAuthor}>{item.yazar}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };
  const renderNewBookItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.kitapNo}
        onPress={() => navigation.navigate('Details', {item: item})}>
        <View>
          <ImageBackground
            source={{uri: item.kapakresmi}}
            imageStyle={styles.newBookItemImageBg}
            style={[
              styles.newBookItemWrapper,
              {marginLeft: item.id === 4 ? 20 : 0},
            ]}>
            <Text numberOfLines={5} style={styles.newBookItemTitle}>
              {item.adi}
            </Text>
            <Text style={styles.newBookItemAuthor}>{item.yazar}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };
  const renderSearchBookItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.kitapNo}
        onPress={() => navigation.navigate('Details', {item: item})}>
        <View>
          <ImageBackground
            source={{uri: item.kapakresmi}}
            imageStyle={styles.searchBookItemImageBg}
            style={[
              styles.searchBookItemWrapper,
              {marginLeft: item.id === 4 ? 20 : 0},
            ]}>
            <Text numberOfLines={5} style={styles.searchBookItemTitle}>
              {item.adi}
            </Text>
            <Text style={styles.searchBookItemAuthor}>{item.yazar}</Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/*Title */}
        {/* <View style={styles.titlesWrapper}>j
        <Text style={styles.titlesTitle}>Hos Geldin</Text>
      </View> */}
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <Image
              source={require('../assets/images/pImages.jpg')}
              style={styles.profileImage}
            />
            <Feather name="menu" size={24} color={colors.textDark} />
          </View>
        </SafeAreaView>

        {/*Search Area */}
        <TouchableNativeFeedback onPress={() => navigation.navigate('Search')}>
          <View style={styles.searchWrapper}>
            <Feather name="search" size={24} color={colors.textDark} />

            <View style={styles.search}>
              <Text style={styles.searchText}>Kitap veya Yazar ara...</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        {/*Populer Books */}
        <View style={styles.populerBookWrapper}>
          <Text style={styles.populerBookTitle}>Önerilenler</Text>

          <View style={styles.populerBookList}>
            <FlatList
              data={populerBook}
              renderItem={renderPopulerBookItem}
              keyExtractor={item => item.adi}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/*New Books */}
        <View style={styles.newBookWrapper}>
          <Text style={styles.newBookTitle}>Yeni Eklenenler</Text>

          <View style={styles.newBookList}>
            <FlatList
              data={lastBooks}
              renderItem={renderNewBookItem}
              keyExtractor={item => item.adi}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {},
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 15,
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  titlesTitle: {
    fontFamily: 'Poppins-Medium',
    color: colors.textDark,
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  search: {
    flex: 1,
    marginLeft: 10,

    borderBottomColor: colors.textSecond,
  },
  searchText: {
    color: colors.textSecond,
    paddingHorizontal: 20,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    alignItems: 'center',
  },
  populerBookWrapper: {
    marginTop: 20,
  },
  populerBookTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: colors.textDark,
    fontSize: 24,
  },
  populerBookList: {
    marginHorizontal: 20,
  },
  populerBookItemWrapper: {
    marginTop: 10,

    marginRight: 20,
    width: 136,
    height: 215,
  },

  populerBookItemImageBg: {
    width: 136,
    height: 209,
    borderRadius: 12,
  },
  populerBookItemTitle: {
    marginTop: 160,
    height: 30,
    fontFamily: 'Poppins-Regular',
    fontSize: 9,
    color: 'white',
    backgroundColor: '#0D253Ca0',
    paddingHorizontal: 5,
    // borderTopRightRadius: 8,
    // borderTopLeftRadius: 8,
  },
  populerBookItemAuthor: {
    fontSize: 9,
    padding: 3,

    color: 'white',

    backgroundColor: '#0D253Cf6',
    paddingHorizontal: 5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  newBookWrapper: {marginTop: 0, paddingHorizontal: 20},
  newBookTitle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: colors.textDark,
    fontSize: 24,
  },
  newBookList: {},
  newBookItemImageBg: {width: 110, height: 180, borderRadius: 12},
  newBookItemWrapper: {
    marginTop: 7,

    marginRight: 12,
    width: 112,
    height: 180,
  },
  newBookItemTitle: {
    marginTop: 130,
    height: 30,
    fontSize: 11,
    color: 'white',
    backgroundColor: '#0D253Ca0',
    paddingHorizontal: 5,
  },
  newBookItemAuthor: {
    fontSize: 8,
    padding: 3,

    color: 'white',

    backgroundColor: '#0D253Cf6',
    paddingHorizontal: 5,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default Home;
