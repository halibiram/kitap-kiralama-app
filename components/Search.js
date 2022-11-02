import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searhData, setSearchData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('http://172.26.32.1:8090/api/?search=' + null);
  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();

    setUrl('http://172.26.32.1:8090/api/?search=' + formattedQuery);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setSearchData(data);
      })
      .catch(error => {
        setError(error);
      });
    setQuery(text);
  };
  //get Search book and author
  useEffect(() => {
    setIsloading(true);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setSearchData(data);

        setIsloading(false);
      })
      .catch(error => {
        setIsloading(false);
        setError(error);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.isLoadingWrapper}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }
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
      <View style={styles.listItem}>
        <Image source={{uri: item.kapakresmi}} style={styles.coverImage} />
        <View style={styles.metaInfo}>
          <Text style={styles.title}>{item.adi}</Text>
          <Text style={styles.title}>{item.yazar}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={style.Container}>
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

      <View style={styles.searchWrapper}>
        <Feather name="search" size={24} color={colors.textDark} />

        <View style={styles.search}>
          <TextInput
            // autoCapitaitalize="none"
            // autoCorrect={false}
            clearButtonMode="always"
            value={query}
            onChangeText={queryText => handleSearch(queryText)}
            placeholder="Kitap veya Yazar ara..."
            style={styles.searchText}
          />
        </View>
      </View>
      {/*List  */}
      <FlatList
        data={searhData}
        keyExtractor={item => item.adi}
        renderItem={renderSearchItem}
      />
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
