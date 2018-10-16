import * as types from 'actions/actionTypes';

export default function subscriberReducer(state = {}, action = null) {
  switch (action.type) {
    case types.GET_SUBSCRIBER:
      return { ...state };
    case types.SUBSCRIBER_RECEIVED:
      return { ...state, details: action.data };
    default:
      return state;
  }
}
