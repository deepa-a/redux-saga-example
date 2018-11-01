import subscriptionTypes from './subscriptionActionTypes';

export function getSubscriptions() {
  return { type: subscriptionTypes.GET_SUBSCRIPTIONS };
}

export function addSubscription(msisdn, subscription) {
  return { type: subscriptionTypes.ADD_SUBSCRIPTION, msisdn, subscription };
}

export function deleteSubscription(msisdn, subscriptionName) {
  return { type: subscriptionTypes.DELETE_SUBSCRIPTION, msisdn, subscriptionName };
}
