import axios from 'axios';
import {useState} from 'react-native';

export default function useDelete() {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [data, setData] = useState(null);

  const deleteData = async (url, params) => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.delete(url, params);
      setLoading(false);
      setData(responseData);
      setInfo(false);
    } catch (err) {
      console.log(err);
    }
  };
  return {loading, info, data, deleteData};
}
