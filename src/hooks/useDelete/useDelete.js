import axios from 'axios';
import {useState} from 'react';

export default function useDelete() {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(null);
  const [data, setData] = useState(null);

  const deleteData = async (url, data) => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.delete(url, {
        headers: {bookId: data.bookId, userId: data.userId},
      });
      setLoading(false);
      setData(responseData);
      setInfo(false);
    } catch (err) {
      console.log(err);
    }
  };
  return {loading, info, data, deleteData};
}
