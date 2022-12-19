import axios from 'axios';
import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, {useState, useEffect, useContext} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';
import {BASE_URL} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

const Search = () => {
  const [query, setQuery] = useState('');

  const [searhData, setSearchData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(BASE_URL + '/api/?search=' + null);
  const navigation = useNavigation();
  const {userInfo} = useContext(AuthContext);
  //kitap ve yazar arama -- query degistiginde tetiklenecek
  useEffect(() => {
    setIsloading(true);

    let formattedQuery = query.toLowerCase();

    axios
      .get(BASE_URL + '/api/?search=' + formattedQuery)
      .then(res => {
        setSearchData(res.data);
        setIsloading(false);
      })
      .catch(error => {
        setError(error);
        setIsloading(false);
      });
  }, [query]);

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={{fontSize: 18}}>
          Baglanti kurulamadi.... internet baglantini kontrol et!
        </Text>
      </View>
    );
  }

  const renderSearchItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.kitapNo}
        onPress={() => navigation.navigate('Details', {item: item})}>
        <View style={styles.listItem}>
          <Image
            source={{uri: BASE_URL + item.kapakresmi}}
            style={styles.coverImage}
          />
          <View style={styles.metaInfo}>
            <Text style={styles.title}>{item.adi}</Text>
            <Text style={styles.title}>{item.yazar}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={style.Container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={
              userInfo.picture
                ? {uri: BASE_URL + '/api/userPhoto/' + userInfo.picture}
                : require('../assets/images/profil.jpg')
            }
            style={styles.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>

      {/*Search Area */}

      <View style={styles.searchWrapper}>
        <Feather name="search" size={24} color={colors.textDark} />

        <View style={styles.search}>
          <TextInput
            // autoCapitaitalize="none"
            // autoCorrect={false}
            clearButtonMode="always"
            onChangeText={queryText => setQuery(queryText)}
            // value={query}
            placeholder="Kitap veya Yazar ara..."
            style={styles.searchText}
          />
        </View>
      </View>
      {/*List  */}
      {isLoading ? (
        <View style={styles.isLoadingWrapper}>
          <ActivityIndicator size="large" color="#5500dc" />
        </View>
      ) : (
        <FlatList
          data={searhData}
          keyExtractor={item => item.adi}
          renderItem={renderSearchItem}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
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
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#101010',
    marjinTop: 60,
    fontWeight: '700',
  },
  listItem: {
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
  },
  isLoadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverImage: {
    width: 70,
    height: 100,
    borderRadius: 8,
  },
  metaInfo: {
    marjinLeft: 10,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 15,
    width: 200,
    padding: 10,
  },
});

export default Search;
