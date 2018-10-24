import * as types from 'actions/actionTypes';

export default function billingAccountReducer(state = { isLoading: false }, action = null) {
  switch (action.type) {
    case types.GET_BILLING_ACCOUNT:
      return { ...state, isLoading: true };
    case types.BILLING_ACCOUNT_RECEIVED:
      return { ...state, isLoading: false, billingDetails: action.data };
    case types.BILLING_ACCOUNT_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.CREATE_BILLING_ACCOUNT:
      return { ...state, isLoading: true };
    case types.CREATE_BILLING_ACCOUNT_SUCCESS:
      return { ...state, isLoading: false, billingDetails: action.data };
    case types.CREATE_BILLING_ACCOUNT_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.UPDATE_BILLING_ACCOUNT:
      return { ...state, isLoading: true };
    case types.UPDATE_BILLING_ACCOUNT_SUCCESS:
      return { ...state, isLoading: false, billingDetails: action.data };
    case types.UPDATE_BILLING_ACCOUNT_FAILED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
