import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { iOrder } from '../../types/types';
/* eslint-disable */
import Order from './components/order/Order';
/* eslint-enable */
import './Orders.scss';

function Orders() {
  const orders = useTypedSelector(state => state.orders.orders);

  const sortOrdersByCreatedDate = (a: iOrder, b: iOrder) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    }

    if (a.createdAt < b.createdAt) {
      return 1;
    }

    return 0;
  };

  return (
    <div className='orders__wrapper'>
      {orders.length === 0 && (
        <span className='no-orders'>Не найдено ни одного заказа</span>
      )}
      {orders.length > 0 && orders.sort((a, b) => sortOrdersByCreatedDate(a, b)).map(order => (
        <Order order={order} key={order.id} />
      ))}
    </div>
  );
}

export default Orders;
