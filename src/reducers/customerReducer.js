import * as types from 'actions/actionTypes';

export default function customerReducer(state = {}, action = null) {
  switch (action.type) {
    case types.GET_CUSTOMER:
      return { ...state };
    case types.CUSTOMER_RECEIVED:
      return { ...state, details: action.data };
    case types.CUSTOMER_REQUEST_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
