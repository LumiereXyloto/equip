import { useEffect, useState } from 'react';
import axios from '../../const/axios';
import { DEVICE_QUERY } from '../../const/api';

export const useList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  const getList = async () => {
    const res = await axios.get(DEVICE_QUERY);
    const data = res?.data?.data || [];
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);

  return {
    loading,
    data,
  };
};
