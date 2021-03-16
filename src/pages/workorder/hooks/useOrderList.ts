import { useEffect, useState } from 'react';
import { Order } from '../types/order';
import { getOrders } from '../api/order';

export const useOrderList = () => {
  const [list, setList] = useState<Order[]>([]);
  useEffect(() => {
    getOrders().then(res => {
      setList(res);
    });
  }, []);
};
