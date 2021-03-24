import { useEffect, useState } from 'react';
import { Order, UpdateOrder } from '../types/order';
import { getOrders, updateOrder } from '../api/order';


export const useOrderList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [excuted, setExcuted] = useState<boolean>(false);
  const [list, setList] = useState<Order[]>([]);

  const submit = async (props: UpdateOrder): Promise<boolean> => {
    const res = await updateOrder(props);
    const code = res?.code || '';
    setExcuted(true);
    if (code === '00000') {
      return true;
    } else {
      return false;
    }
  }
  
  useEffect(() => {
    getOrders().then(res => {
      setList(res.data ? res.data : []);
      setLoading(false);
    });
  }, [excuted]);

  return {
    loading,
    list,
    submit
  }
};
