import axios from 'axios';
import {useState} from 'react';
import {Alert} from 'react-native';

function usePatch() {
  const [patchData, setData] = useState(null);
  const [patchLoading, setLoading] = useState(false);
  const [patchErr, setErr] = useState(null);
  const [patchInfo, setInfo] = useState(null);
  const patch = async (url, apiData, navigation, item) => {
    try {
      setErr(null);
      setLoading(true);
      const {data: responseData} = await axios.patch(url, apiData);
      setInfo(
        responseData[0][0].error &&
          navigation.navigate('Book', {
            screen: 'RentABook',
            params: {item: item, check: true},
          }),
      );

      const info = responseData[0][0].info
        ? responseData[0][0].info
        : responseData[0][0].error;

      !responseData[0][0].trueBookcase &&
        Alert.alert(
          'Bilgi',
          info,
          responseData[0][0].info && [{onPress: () => navigation.goBack()}],
        );
      setData(responseData);
      setLoading(false);
      setInfo(true);
    } catch (err) {
      console.log(err);
      setErr(err);
    }
  };

  return {patchData, patchErr, patchLoading, patchInfo, patch};
}
export default usePatch;
