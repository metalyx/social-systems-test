import { iLinkType } from '../../types/types';
import { NewOrderActions, NewOrderActionTypes } from '../reducers/newOrderReducer';

export function setLinkType(payload: iLinkType): NewOrderActions {
  return {
    type: NewOrderActionTypes.SET_LINK_TYPE,
    payload,
  };
}

export function setLink(payload: string): NewOrderActions {
  return {
    type: NewOrderActionTypes.SET_TASK_LINK,
    payload,
  };
}

export function clearLinkType(): NewOrderActions {
  return {
    type: NewOrderActionTypes.CLEAR_TASK_LINK_TYPE,
  };
}

export function clearLink(): NewOrderActions {
  return {
    type: NewOrderActionTypes.CLEAR_TASK_LINK,
  };
}

export function setFolowers(payload: number): NewOrderActions {
  return {
    type: NewOrderActionTypes.SET_FOLOWERS,
    payload,
  };
}

export function setLikes(payload: number): NewOrderActions {
  return {
    type: NewOrderActionTypes.SET_LIKES,
    payload,
  };
}

export function setReposts(payload: number): NewOrderActions {
  return {
    type: NewOrderActionTypes.SET_REPOSTS,
    payload,
  };
}

export function setRepostsTotalPrice(payload: number): NewOrderActions {
  return {
    type: NewOrderActionTypes.SET_REPOSTS_TOTAL_PRICE,
    payload,
  };
}

export function setLikesTotalPrice(payload: number): NewOrderActions {
  return {
    type: NewOrderActionTypes.SET_LIKES_TOTAL_PRICE,
    payload,
  };
}

export function setFolowersTotalPrice(payload: number): NewOrderActions {
  return {
    type: NewOrderActionTypes.SET_FOLOWERS_TOTAL_PRICE,
    payload,
  };
}

export function clearNewOrder(): NewOrderActions {
  return {
    type: NewOrderActionTypes.CLEAR_NEW_ORDER_STATE,
  };
}

export function setTotalPrice(payload: number): NewOrderActions {
  return {
    type: NewOrderActionTypes.SET_TOTAL_PRICE,
    payload,
  };
}

export function unsetAllPrices(): NewOrderActions {
  return {
    type: NewOrderActionTypes.UNSET_ALL_PRICES,
  };
}
