"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGet = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.recordsets);
      } catch (err) {
      console.log(err.message)
      } 
    };

    fetchData();
  }, [url]);

  return data;
};
