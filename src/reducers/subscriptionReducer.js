import subscriptionTypes from 'actions/subscriptionActionTypes';

export default function subscriptionReducer(state = {}, action = null) {
  switch (action.type) {
    case subscriptionTypes.GET_SUBSCRIPTIONS:
      return { ...state };
    case subscriptionTypes.GET_SUBSCRIPTIONS_SUCCESS:
      return { ...state, subscriptions: action.data };
    case subscriptionTypes.GET_SUBSCRIPTIONS_FAILED:
      return { ...state, error: action.error };
    case subscriptionTypes.ADD_SUBSCRIPTION:
      return { ...state };
    case subscriptionTypes.ADD_SUBSCRIPTION_SUCCESS:
      return { ...state, subscriptions: action.data };
    case subscriptionTypes.ADD_SUBSCRIPTION_FAILED:
      return { ...state, subscriptions: action.data };
    case subscriptionTypes.DELETE_SUBSCRIPTION:
      return { ...state };
    case subscriptionTypes.DELETE_SUBSCRIPTION_SUCCESS:
      return { ...state };
    case subscriptionTypes.DELETE_SUBSCRIPTION_FAILED:
      return { ...state };
    default:
      return state;
  }
}
