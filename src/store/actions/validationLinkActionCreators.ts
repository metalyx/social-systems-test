import { ValidationLinkActions, ValidationLinkActionTypes } from '../reducers/validationLinkReducer';

export function setBlured(payload: boolean): ValidationLinkActions {
  return {
    type: ValidationLinkActionTypes.SET_IS_BLURED,
    payload,
  };
}

export function setIsTriedToSend(payload: boolean): ValidationLinkActions {
  return {
    type: ValidationLinkActionTypes.SET_IS_TRIED_TO_SEND,
    payload,
  };
}

export function setIsValid(payload: boolean): ValidationLinkActions {
  return {
    type: ValidationLinkActionTypes.SET_IS_VALID,
    payload,
  };
}

export function clearValidation(): ValidationLinkActions {
  return {
    type: ValidationLinkActionTypes.CLEAR_VALIDATION,
  };
}
