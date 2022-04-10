import { mockOrders } from '../../constants/constants';
import { iOrder } from '../../types/types';

interface OrderState {
  orders: iOrder[];
}

const initialOrderState: OrderState = {
  orders: [mockOrders],
};

/* eslint-disable no-shadow, no-unused-vars */
export enum OrdersActionTypes {
  ADD_ORDER = 'ADD_ORDER',
  ADD_COUNTS = 'ADD_COUNTS',
}
/* eslint-enable no-shadow, no-unused-vars */

type OrderActionOrderPayload = {
  type: OrdersActionTypes.ADD_ORDER | OrdersActionTypes.ADD_COUNTS,
  payload: iOrder,
}

export type OrdersActions = OrderActionOrderPayload;

export function ordersReducer(
  state: OrderState = initialOrderState,
  action: OrdersActions,
): OrderState {
  switch (action.type) {
    case OrdersActionTypes.ADD_ORDER:
      // eslint-disable-next-line no-case-declarations
      const { payload } = action;
      payload.id = state.orders.length + 1;

      return {
        ...state,
        orders: [...state.orders, payload],
      };

    case OrdersActionTypes.ADD_COUNTS:
      return {
        ...state,
        orders: [...state.orders.filter(order => order.id !== action.payload.id), action.payload],
      };
    default:
      return state;
  }
}
