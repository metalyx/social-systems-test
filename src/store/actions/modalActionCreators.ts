import { ModalActions, ModalActionTypes } from '../reducers/modalReducer';

export function openModal(): ModalActions {
  return {
    type: ModalActionTypes.OPEN_MODAL,
  };
}

export function closeModal(): ModalActions {
  return {
    type: ModalActionTypes.CLOSE_MODAL,
  };
}
