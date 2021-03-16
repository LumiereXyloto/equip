import axios from '../../../const/axios';
import { NEW_ORDER, GET_ORDERS } from '../../../const/api';
import { PostOrder, Order } from '../types/order';


const postNewOrder = async (props: PostOrder): Promise<void> => {
  await axios.post(NEW_ORDER);
};

const getOrders = async (): Promise<Order[]> => {
  const result = await axios.get(GET_ORDERS);
  return result.data;
}


export { postNewOrder, getOrders };