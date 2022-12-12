import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableNativeFeedback,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import useFetch from '../hooks/useFetch';
import colors from '../assets/colors/colors';
import {BASE_URL} from '../../config';
import BookCard from './BookCard';

Feather.loadFont();

const Home = ({navigation}) => {
  const {data: populerBook, err, loading} = useFetch(BASE_URL + '/api/book');

  const {data: lastBooks} = useFetch(BASE_URL + '/api/book?last=last');

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
        <TouchableNativeFeedback onPress={() => navigation.navigate('Book')}>
          <View style={styles.searchWrapper}>
            <Feather name="search" size={24} color={colors.textDark} />

            <View style={styles.search}>
              <Text style={styles.searchText}>Kitap veya Yazar ara...</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
        {/*Populer Books */}
        {loading ? (
          <View style={styles.isLoadingWrapper}>
            <ActivityIndicator size="large" color="#5500dc" />
          </View>
        ) : (
          <SafeAreaView>
            <View style={styles.populerBookWrapper}>
              <Text style={styles.populerBookTitle}>Önerilenler</Text>

              <View style={styles.populerBookList}>
                <FlatList
                  data={populerBook}
                  renderItem={({item}) =>
                    BookCard(item, BASE_URL, navigation, true)
                  }
                  keyExtractor={(item, index) => {
                    return index.toString();
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
            {/*New Books */}
            <View style={styles.newBookWrapper}>
              <Text style={styles.newBookTitle}>Yeni Eklenenler</Text>

              <View style={styles.newBookList}>
                {loading ? (
                  <View style={styles.isLoadingWrapper}>
                    <ActivityIndicator size="large" color="#5500dc" />
                  </View>
                ) : (
                  <FlatList
                    data={lastBooks}
                    renderItem={({item}) =>
                      BookCard(item, BASE_URL, navigation, false)
                    }
                    keyExtractor={(item, index) => {
                      return index.toString();
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  />
                )}
              </View>
            </View>
          </SafeAreaView>
        )}
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
    marginTop: 30,
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
  newBookWrapper: {
    marginTop: 30,
  },
  newBookTitle: {
    paddingHorizontal: 20,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    color: colors.textDark,
    fontSize: 24,
  },
  newBookList: {
    marginHorizontal: 20,
  },
  isLoadingWrapper: {
    paddingTop: 300,
  },
});

export default Home;
