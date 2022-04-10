interface ValidationLinkState {
  isBlured: boolean;
  isTriedToSend: boolean;
  isValid: boolean;
}

const initialValidationLinkState: ValidationLinkState = {
  isBlured: false,
  isTriedToSend: false,
  isValid: false,
};

/* eslint-disable no-shadow, no-unused-vars */
export enum ValidationLinkActionTypes {
  SET_IS_BLURED = 'SET_IS_BLURED',
  SET_IS_TRIED_TO_SEND = 'SET_IS_TRIED_TO_SEND',
  SET_IS_VALID = 'SET_IS_VALID',
  CLEAR_VALIDATION = 'CLEAR_VALIDATION'
}
/* eslint-enable no-shadow, no-unused-vars */

type ValidationLinkBooleanPayload = {
  type: ValidationLinkActionTypes.SET_IS_BLURED
  | ValidationLinkActionTypes.SET_IS_TRIED_TO_SEND
  | ValidationLinkActionTypes.SET_IS_VALID,
  payload: boolean,
}

type ValidationLinkWithoutPayload = {
  type: ValidationLinkActionTypes.CLEAR_VALIDATION
}

export type ValidationLinkActions = ValidationLinkBooleanPayload | ValidationLinkWithoutPayload;

export function validationLinkReducer(
  state: ValidationLinkState = initialValidationLinkState,
  action: ValidationLinkActions,
): ValidationLinkState {
  switch (action.type) {
    case ValidationLinkActionTypes.SET_IS_BLURED:
      return {
        ...state,
        isBlured: action.payload,
      };
    case ValidationLinkActionTypes.SET_IS_TRIED_TO_SEND:
      return {
        ...state,
        isTriedToSend: action.payload,
      };
    case ValidationLinkActionTypes.SET_IS_VALID:
      return {
        ...state,
        isValid: action.payload,
      };
    case ValidationLinkActionTypes.CLEAR_VALIDATION:
      return {
        ...state,
        isValid: false,
        isBlured: false,
        isTriedToSend: false,
      };
    default:
      return state;
  }
}
