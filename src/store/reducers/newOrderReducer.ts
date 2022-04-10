import { iLinkType } from '../../types/types';

export interface NewOrderState {
  taskLink?: string;
  likes?: number;
  reposts?: number;
  folowers?: number;
  totalPrice?: number;
  linkType?: iLinkType;
  likesTotalPrice?: number;
  repostsTotalPrice?: number;
  folowersTotalPrice?: number;
}

const newOrderInitialState: NewOrderState = {
};

/* eslint-disable no-shadow, no-unused-vars */
export enum NewOrderActionTypes {
  SET_TASK_LINK = 'SET_TASK_LINK',
  SET_LIKES = 'SET_LIKES',
  SET_REPOSTS = 'SET_REPOSTS',
  SET_FOLOWERS = 'SET_FOLOWERS',
  SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
  CLEAR_NEW_ORDER_STATE = 'CLEAR_NEW_ORDER_STATE',
  SET_LINK_TYPE = 'SET_LINK_TYPE',
  CLEAR_TASK_LINK = 'CLEAR_TASK_LINK',
  CLEAR_TASK_LINK_TYPE = 'CLEAR_TASK_LINK_TYPE',
  SET_FOLOWERS_TOTAL_PRICE = 'SET_FOLOWERS_TOTAL_PRICE',
  SET_LIKES_TOTAL_PRICE = 'SET_LIKES_TOTAL_PRICE',
  SET_REPOSTS_TOTAL_PRICE = 'SET_REPOSTS_TOTAL_PRICE',
  UNSET_ALL_PRICES = 'UNSET_ALL_PRICES',
}
/* eslint-enable no-shadow, no-unused-vars */

type NewOrderActionNumberPayload = {
  type:NewOrderActionTypes.SET_FOLOWERS
  | NewOrderActionTypes.SET_LIKES
  | NewOrderActionTypes.SET_REPOSTS
  | NewOrderActionTypes.SET_TOTAL_PRICE
  | NewOrderActionTypes.SET_LIKES_TOTAL_PRICE
  | NewOrderActionTypes.SET_FOLOWERS_TOTAL_PRICE
  | NewOrderActionTypes.SET_REPOSTS_TOTAL_PRICE,

  payload: number,
}

type NewOrderActionWithoutPayload = {
  type: NewOrderActionTypes.CLEAR_NEW_ORDER_STATE
  | NewOrderActionTypes.CLEAR_TASK_LINK
  | NewOrderActionTypes.CLEAR_TASK_LINK_TYPE
  | NewOrderActionTypes.UNSET_ALL_PRICES,
}

type NewOrderActionStringPayload = {
  type: NewOrderActionTypes.SET_TASK_LINK,
  payload: string,
}

type NewOrderActionLinkTypePayload = {
  type: NewOrderActionTypes.SET_LINK_TYPE,
  payload: iLinkType,
}

export type NewOrderActions =
NewOrderActionNumberPayload |
NewOrderActionWithoutPayload |
NewOrderActionStringPayload |
NewOrderActionLinkTypePayload;

export function newOrderReducer(
  state: NewOrderState = newOrderInitialState,
  action: NewOrderActions,
): NewOrderState {
  switch (action.type) {
    case NewOrderActionTypes.SET_FOLOWERS:
      return {
        ...state,
        folowers: action.payload,
      };

    case NewOrderActionTypes.SET_LIKES:
      return {
        ...state,
        likes: action.payload,
      };

    case NewOrderActionTypes.SET_REPOSTS:
      return {
        ...state,
        reposts: action.payload,
      };

    case NewOrderActionTypes.SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    case NewOrderActionTypes.SET_TASK_LINK:
      return {
        ...state,
        taskLink: action.payload,
      };

    case NewOrderActionTypes.SET_LINK_TYPE:
      return {
        ...state,
        linkType: action.payload,
      };

    case NewOrderActionTypes.CLEAR_TASK_LINK:
      return {
        ...state,
        taskLink: '',
      };

    case NewOrderActionTypes.SET_FOLOWERS_TOTAL_PRICE:
      return {
        ...state,
        folowersTotalPrice: action.payload,
      };

    case NewOrderActionTypes.SET_LIKES_TOTAL_PRICE:
      return {
        ...state,
        likesTotalPrice: action.payload,
      };

    case NewOrderActionTypes.SET_REPOSTS_TOTAL_PRICE:
      return {
        ...state,
        repostsTotalPrice: action.payload,
      };

    case NewOrderActionTypes.UNSET_ALL_PRICES:
      return {
        ...state,
        likes: 0,
        reposts: 0,
        folowers: 0,
        totalPrice: 0,
        likesTotalPrice: 0,
        folowersTotalPrice: 0,
        repostsTotalPrice: 0,
      };

    case NewOrderActionTypes.CLEAR_TASK_LINK_TYPE:
      return {
        ...state,
        linkType: {
          isInstagram: false,
          isPost: false,
          isProfile: false,
          isVk: false,
        },
      };

    case NewOrderActionTypes.CLEAR_NEW_ORDER_STATE:
      return {};

    default:
      return state;
  }
}
