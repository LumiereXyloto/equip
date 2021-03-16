import { useEffect, useState } from 'react';
import { Order } from '../types/order';
import { getOrders } from '../api/order';

export const useOrderList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [list, setList] = useState<Order[]>([]);
  useEffect(() => {
    getOrders().then(res => {
      setList(res ? res : []);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    list
  }
};
