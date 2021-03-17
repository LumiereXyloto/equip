import { useState } from 'react';
import { PostOrder } from '../types/order';
import { postNewOrder } from '../api/order';

export const useAddOrder= () => {
  const [success, setSuccess] = useState<boolean>(false);
  const submit = async (form: PostOrder): Promise<void> => {
    const res = await postNewOrder(form);
    const code = res?.code || '';
    if (code === '00000') {
      setSuccess(true);
    }
  };

  return {
    success,
    submit
  }
};
