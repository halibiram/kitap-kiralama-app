import React, {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setErr(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {data, err, loading};
}

export default useFetch;
