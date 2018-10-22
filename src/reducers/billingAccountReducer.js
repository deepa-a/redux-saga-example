import * as types from 'actions/actionTypes';

export default function billingAccountReducer(state = {}, action = null) {
  switch (action.type) {
    case types.GET_BILLING_ACCOUNT:
      return { ...state };
    case types.BILLING_ACCOUNT_RECEIVED:
      return { ...state, details: action.data };
    case types.BILLING_ACCOUNT_REQUEST_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
