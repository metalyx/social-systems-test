import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { newOrderReducer } from './newOrderReducer';
import { ordersReducer } from './ordersReducer';
import { validationLinkReducer } from './validationLinkReducer';

export const rootReducer = combineReducers({
  orders: ordersReducer,
  modal: modalReducer,
  newOrder: newOrderReducer,
  validationLink: validationLinkReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
