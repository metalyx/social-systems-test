import { iModal } from '../../types/types';

const initialModalState: iModal = {
  isOpened: false,
};

/* eslint-disable no-shadow, no-unused-vars */
export enum ModalActionTypes {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL'
}
/* eslint-enable no-shadow, no-unused-vars */

type ModalActionWithoutPayload = {
  type: ModalActionTypes.OPEN_MODAL | ModalActionTypes.CLOSE_MODAL,
}

export type ModalActions = ModalActionWithoutPayload;

export function modalReducer(
  state: iModal = initialModalState,
  action: ModalActions,
): iModal {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpened: true,
      };

    case ModalActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpened: false,
      };

    default:
      return state;
  }
}
