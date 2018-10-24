import * as types from 'actions/actionTypes';

export default function subscriberReducer(state = { isLoading: false }, action = null) {
  switch (action.type) {
    case types.GET_SUBSCRIBER:
      return { ...state, isLoading: true };
    case types.SUBSCRIBER_RECEIVED:
      return { ...state, isLoading: false, subscriberDetails: action.data };
    case types.SUBSCRIBER_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.CREATE_SUBSCRIBER:
      return { ...state, isLoading: true };
    case types.CREATE_SUBSCRIBER_SUCCESS:
      return { ...state, isLoading: false, subscriberDetails: action.data };
    case types.CREATE_SUBSCRIBER_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.GET_SUB_BILLING_ACCOUNT:
      return { ...state, isLoading: true };
    case types.SUB_BILLING_ACCOUNT_RECEIVED:
      return { ...state, isLoading: false, billingDetails: action.data };
    case types.SUB_BILLING_ACCOUNT_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.GET_SUB_CUSTOMER:
      return { ...state, isLoading: true };
    case types.SUB_CUSTOMER_RECEIVED:
      return { ...state, isLoading: false, customerDetails: action.data };
    case types.SUB_CUSTOMER_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
