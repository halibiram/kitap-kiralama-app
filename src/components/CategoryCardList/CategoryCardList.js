import axios from 'axios';

import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../assets/colors/colors';
import {BASE_URL} from '../../../config';

import {styles} from './CategoryCardList.style';

const CategoryCardList = ({route, navigation}) => {
  const [query, setQuery] = useState('');

  const [books, setBooks] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState(null);

  //kitap ve yazar arama -- query degistiginde tetiklenecek
  useEffect(() => {
    setIsloading(true);
    setError(null);

    axios
      .get(BASE_URL + '/api/category/?id=' + route.params.categoryId)
      .then(res => {
        setBooks(res.data[0]);
        setSearchData(res.data[0]);
        setIsloading(false);
      })
      .catch(error => {
        setError(error);
        setIsloading(false);
      });
  }, [route.params.categoryId]);

  useEffect(() => {
    let formattedQuery = query.toLowerCase();
    try {
      const searchBooks = searchData.filter(book =>
        book.adi.includes(formattedQuery),
      );
      setBooks(searchBooks);
    } catch {}
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

  const renderItem = ({item}) => {
    return (
      <View style={styles.Container}>
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
      </View>
    );
  };

  return (
    <View style={styles.Container}>
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
          data={books}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default CategoryCardList;
