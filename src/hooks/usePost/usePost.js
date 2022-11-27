import axios from 'axios';
import {useState} from 'react';
import {Alert} from 'react-native';

function usePost() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [info, setInfo] = useState(false);
  const post = async (url, apiData) => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.post(url, apiData);
      Alert.alert('Bilgi', responseData[0].statusCode);
      setData(responseData);
      setLoading(false);
      setInfo(true);
    } catch (err) {
      console.log(err);
      setErr(err);
    }
  };

  return {data, err, loading, info, post};
}
export default usePost;
