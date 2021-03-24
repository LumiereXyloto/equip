import axios from '../../../const/axios';
import { NEW_ORDER, GET_ORDERS, EXECUTE_ORDER } from '../../../const/api';
import { OResponse ,PostOrder, Order, UpdateOrder } from '../types/order';

const getOrders = async (): Promise<OResponse<Order[]>> => {
  const result = await axios.get(GET_ORDERS);
  return result.data;
}

const postNewOrder = async (props: PostOrder): Promise<OResponse<any>> => {
  const result = await axios.post(NEW_ORDER, props);
  return result.data;
};


const updateOrder = async (props: UpdateOrder): Promise<OResponse<any>> => {
  const result = await axios.post(EXECUTE_ORDER, props);
  return result.data;
}


export { postNewOrder, getOrders, updateOrder };