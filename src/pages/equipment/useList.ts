import { useEffect } from 'react';
import axios from '../../const/axios';
import { DEVICE_QUERY } from '../../const/api';

export const useList = () => {
  useEffect(() => {
    const res = axios.get(DEVICE_QUERY);
    console.log(res);
  }, []);
};
