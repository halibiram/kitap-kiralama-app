import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, FlatList, View, TextInput} from 'react-native';
import CategoryCard from './CategoryCard';
import useFetch from '../hooks/useFetch';
import {BASE_URL} from '../../config';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';

const Category = ({navigation}) => {
  const {data} = useFetch(BASE_URL + '/api/category');
  const [searchCategory, setSearchCategory] = useState();
  const [categoryData, setCategoryData] = useState(data);
  const [query, setQuery] = useState('');
  useEffect(() => {
    let formattedQuery = query.toLowerCase();
    try {
      const search = categoryData.filter(category =>
        category.kategoriAdi.toLowerCase().includes(formattedQuery),
      );
      setSearchCategory(search);
    } catch {}
  }, [query, categoryData]);
  useEffect(() => {
    setCategoryData(data);
  }, [data]);
  return (
    <>
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
            placeholder="Kategori ara..."
            style={styles.searchText}
          />
        </View>
      </View>
      <FlatList
        data={searchCategory}
        renderItem={({item}) => CategoryCard(item, navigation)}
        keyExtractor={item => item.kategoriNo}
      />
    </>
  );
};
const styles = StyleSheet.create({
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
});

export default Category;
