import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text, FlatList} from 'react-native';
import styles from './CategoryCard.style';
//import CategoryCardList from '../CategoryCardList';
import useFetch from '../../hooks/useFetch';
import {BASE_URL} from '../../../config';

const CategoryCard = (item, navigation) => {
  return (
    <>
      <TouchableOpacity
        key={item.kategoriNo}
        onPress={() =>
          navigation.navigate('Book', {
            screen: 'CategoryCardList',
            params: {categoryId: item.kategoriNo},
          })
        }>
        <View style={styles.listItem}>
          <View style={styles.metaInfo}>
            <Text style={styles.title}>{item.kategoriAdi}</Text>
            <View style={styles.number}>
              <Text
                style={
                  ([styles.title],
                  {paddingLeft: 120, fontSize: 20, fontWeight: 'bold'})
                }>
                {item.toplamKitapSayisi}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      {/* <FlatList
        data={books}
        renderItem={({item}) => CategoryCardList(item)}
        keyExtractor={item => item.kitapNo}
      /> */}
    </>
  );
};

export default CategoryCard;
