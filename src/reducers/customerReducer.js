import * as types from 'actions/actionTypes';

export default function customerReducer(state = { isLoading: false }, action = null) {
  switch (action.type) {
    case types.GET_CUSTOMER:
      return { ...state, isLoading: true };
    case types.CUSTOMER_RECEIVED:
      return { ...state, isLoading: false, customerDetails: action.data };
    case types.CUSTOMER_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.CREATE_CUSTOMER:
      return { ...state, isLoading: true };
    case types.CREATE_CUSTOMER_SUCCESS:
      return { ...state, isLoading: false, customerDetails: action.data };
    case types.CREATE_CUSTOMER_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.UPDATE_CUSTOMER:
      return { ...state, isLoading: true };
    case types.UPDATE_CUSTOMER_SUCCESS:
      return { ...state, isLoading: false, customerDetails: action.data };
    case types.UPDATE_CUSTOMER_FAILED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
