import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './DeliverBook.style';
import {Button} from '../RentABook/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DeliverBook = ({deliver, navigation}) => {
  const [check, setCheck] = useState({
    scanBookcase: true,
    scanBook: true,
    bookcaseId: 5,
    bookId: 5,
  });
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          setCheck({...check, scanBookcase: !check.scanBookcase});
        }}
        disabled={check.bookcaseId && true}>
        <View
          style={[
            styles.inputContainer,
            check.scanBookcase
              ? check.bookcaseId
                ? {borderColor: 'green'}
                : {borderColor: 'red'}
              : null,
          ]}>
          <Text style={[styles.inputText]}>Dolap karekodunu okut</Text>
          {check.bookcaseId ? (
            <MaterialCommunityIcons
              name="check-decagram"
              size={40}
              color={'green'}
            />
          ) : (
            <MaterialCommunityIcons name="line-scan" size={40} />
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setCheck({...check, scanBook: !check.scanBook});
        }}
        disabled={check.bookId && true}>
        <View
          style={[
            styles.inputContainer,
            check.scanBook
              ? check.bookId
                ? {borderColor: 'green'}
                : {borderColor: 'red'}
              : null,
          ]}>
          <Text style={styles.inputText}>Kitap karekodunu okut</Text>
          {check.bookId ? (
            <MaterialCommunityIcons
              name="check-decagram"
              size={40}
              color={'green'}
            />
          ) : (
            <MaterialCommunityIcons name="line-scan" size={40} />
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.Button}>
        <Button
          textColor="white"
          bgColor={check.bookId && check.bookcaseId ? 'green' : 'gray'}
          btnLabel="Teslim Et"
          Width={150}
          Press={() => {
            null;
          }}
          loading={false}
          touch={check.bookId && check.bookcaseId ? false : true}
        />
      </View>
    </View>
  );
};
export default DeliverBook;
