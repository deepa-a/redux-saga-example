import * as types from 'actions/actionTypes';

export default function subscriberReducer(state = {}, action = null) {
  switch (action.type) {
    case types.GET_SUBSCRIBER:
      return { ...state };
    case types.SUBSCRIBER_RECEIVED:
      return { ...state, subscriberDetails: action.data };
    case types.SUBSCRIBER_REQUEST_FAILED:
      return { ...state, error: action.error };
    case types.CREATE_SUBSCRIBER:
      return { ...state };
    case types.CREATE_SUBSCRIBER_SUCCESS:
      return { ...state, subscriberDetails: action.data };
    case types.CREATE_SUBSCRIBER_FAILED:
      return { ...state, error: action.error };
    case types.GET_SUB_BILLING_ACCOUNT:
      return { ...state };
    case types.SUB_BILLING_ACCOUNT_RECEIVED:
      return { ...state, billingDetails: action.data };
    case types.SUB_BILLING_ACCOUNT_REQUEST_FAILED:
          return { ...state, error: action.error };
    case types.GET_SUB_CUSTOMER:
      return { ...state };
    case types.SUB_CUSTOMER_RECEIVED:
      return { ...state, customerDetails: action.data };
    case types.SUB_CUSTOMER_REQUEST_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
