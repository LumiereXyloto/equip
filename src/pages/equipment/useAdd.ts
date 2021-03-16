import { useState } from 'react';
import axios from '../../const/axios';
import { DEVICE_ADD } from '../../const/api';

export const useAdd = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const postAdd = async (values: any) => {
    const res = await axios.post(DEVICE_ADD, values);
    const code = res?.data?.code || '';
    if (code === '00000') {
      setSuccess(true);
    }
  };
  return { success, submit: postAdd };
};
