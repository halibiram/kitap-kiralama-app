import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {BASE_URL} from '../../../config';
import useFetch from '../../hooks/useFetch';
import styles from './BookLocation.style';

export default BookLocation = ({route}) => {
  const [selectBookcase, setSelectBookcase] = useState(null);
  const [locationInfo, setLocationInfo] = useState(null);

  const {data, loading, err} = useFetch(
    BASE_URL +
      `/api/books/?bookId=${route.params.item.kitapNo}&shelfId=${route.params.item.rafNo}`,
  );

  useEffect(() => {
    console.log(route.params.item);
    console.log(data);
    try {
      setSelectBookcase(data[0].dolapNo);
      setLocationInfo({
        bookName: data[0].adi,
        aisle: data[0].reyonAdi,
        bookcase: data[0].dolapNo,
        shelf: data[0].rafAdi,
      });
    } catch (error) {
      console.log(error);
    }
  }, [data]);
  locationInfo &&
    Alert.alert(
      'Kitap konum bilgileri',
      `${locationInfo.bookName}\n\n\n${locationInfo.aisle} ${locationInfo.bookcase}.nolu Dolap ${locationInfo.shelf} Rafinda`,
    );

  return (
    <View style={styles.Container}>
      <View style={[styles.Aisle, {marginTop: 25}]}>
        <View
          style={[
            styles.BookCase,
            selectBookcase === 1 && {backgroundColor: 'green'},
          ]}>
          <Text style={styles.title}>1</Text>
        </View>
        <View
          style={[
            styles.BookCase,
            selectBookcase === 2 && {backgroundColor: 'green'},
          ]}>
          <Text style={styles.title}>2</Text>
        </View>
        <View
          style={[
            styles.BookCase,
            selectBookcase === 3 && {backgroundColor: 'green'},
          ]}>
          <Text style={styles.title}>3</Text>
        </View>
        <View
          style={[
            styles.BookCase,
            selectBookcase === 4 && {backgroundColor: 'green'},
          ]}>
          <Text style={styles.title}>4</Text>
        </View>
      </View>
      <View style={styles.AisleWrapper}>
        <Text style={styles.AisleTitle}>A Reyonu</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.Aisle}>
          <View
            style={[
              styles.BookCase,
              selectBookcase === 5 && {backgroundColor: 'green'},
            ]}>
            <Text style={styles.title}>5</Text>
          </View>
          <View
            style={[
              styles.BookCase,
              selectBookcase === 6 && {backgroundColor: 'green'},
            ]}>
            <Text style={styles.title}>6</Text>
          </View>
          <View style={{marginLeft: 70}}></View>
          <View
            style={[
              styles.BookCase,
              selectBookcase === 7 && {backgroundColor: 'green'},
            ]}>
            <Text style={styles.title}>7</Text>
          </View>
        </View>
      </View>
      <View style={styles.AisleWrapper}>
        <Text style={styles.AisleTitle}>B Reyonu</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.Aisle}>
          <View
            style={[
              styles.BookCase,
              selectBookcase === 8 && {backgroundColor: 'green'},
            ]}>
            <Text style={styles.title}>8</Text>
          </View>
          <View
            style={[
              styles.BookCase,
              selectBookcase === 9 && {backgroundColor: 'green'},
            ]}>
            <Text style={styles.title}>9</Text>
          </View>
          <View style={{marginLeft: 70}}></View>
          <View
            style={[
              styles.BookCase,
              selectBookcase === 10 && {backgroundColor: 'green'},
            ]}>
            <Text style={styles.title}>10</Text>
          </View>
        </View>
      </View>
      <View style={styles.AisleWrapper}>
        <Text style={styles.AisleTitle}>C Reyonu</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.Aisle}>
          <View
            style={[
              styles.BookCase,
              selectBookcase === 11 && {backgroundColor: 'green'},
            ]}>
            <Text style={styles.title}>11</Text>
          </View>
          <View
            style={[
              styles.BookCase,
              selectBookcase === 12 && {backgroundColor: 'green'},
            ]}>
            <Text style={styles.title}>12</Text>
          </View>
          <View style={{marginLeft: 70}}></View>
          <View
            style={[
              styles.BookCase,
              selectBookcase === 13 && {backgroundColor: 'green'},
            ]}>
            <Text style={styles.title}>13</Text>
          </View>
        </View>
      </View>
      <View style={styles.AisleWrapper}>
        <Text style={styles.AisleTitle}>D Reyonu</Text>
      </View>
    </View>
  );
};
