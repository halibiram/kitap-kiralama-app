import React, {useState, useMemo, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './DeliverBook.style';
import {Button} from '../RentABook/Button';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import usePatch from '../../hooks/usePatch';
import {BASE_URL} from '../../../config';

const DeliverBook = ({deliver, navigation, item, route, qrcode}) => {
  const [check, setCheck] = useState({
    scanBookcase: false,
    scanBook: true,
    bookcaseId: null,
    bookId: item.kitapNo,
  });
  const [checkBookcase, setCheckBookcase] = useState(false);
  const {patchInfo, patch} = usePatch();
  useEffect(() => {
    if (route.params.scanResult) {
      let scanData = route.params.scanResult;
      checked(scanData);
    } else if (qrcode) {
      setCheck({...check, scanBook: true, bookId: item.kitapNo});
    } else if (route.params.check) {
      setCheck({
        scanBookcase: true,
        scanBook: true,
        bookcaseId: null,
        bookId: route.params.item.kitapNo,
      });
    }
  }, [route.params.scanResult]); //

  useEffect(() => {
    console.log(patchInfo);

    if (check.bookId && check.bookcaseId) {
      checkedBookcase();
    }
  }, [checkBookcase]);
  const checked = data => {
    if (data.includes('book')) {
      let firstIndex = data.indexOf('book');
      let id = data.substr(firstIndex + 6, data.length);
      setCheck({...check, scanBook: true, bookId: id});
    } else if (data.includes('qrcode')) {
      let firstIndex = data.indexOf('qrcode');

      let id = data.substr(firstIndex + 7, data.length);

      setCheck({...check, scanBookcase: true, bookcaseId: id});
    }
    if (check.bookId) {
      setCheckBookcase(!checkBookcase);
    }
  };
  const checkedBookcase = () => {
    let patchData = {
      bookId: check.bookId,
      bookcaseId: check.bookcaseId,
      userId: null,
    };
    patch(BASE_URL + '/api/rentbook/check', patchData, navigation, item);
  };

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Qrcode', {deliver: true, item: item});
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
          <Text style={[styles.inputText]}>
            {check.bookcaseId ? check.bookcaseId : 'Dolap karekodunu okut'}
          </Text>
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
          navigation.navigate('Qrcode', {deliver: true, item: item});
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
          <Text style={styles.inputText}>
            {check.bookId ? check.bookId : 'Kitap karekodunu okut'}
          </Text>
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
            deliver(check.bookId, check.bookcaseId);
          }}
          loading={false}
          touch={check.bookId && check.bookcaseId ? false : true}
        />
      </View>
    </View>
  );
};
export default DeliverBook;
