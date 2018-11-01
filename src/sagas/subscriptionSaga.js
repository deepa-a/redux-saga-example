import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from '../utils/axios';
import types from '../actions/subscriptionActionTypes';
import { ENDPOINTS } from '../constants/apiEndpoints';

export function fetchSubscriptions(msisdn) {
  return axios
    .get(`${ENDPOINTS.SUBSCRIPTIONS.GET.URL}${msisdn}/subscriptions`)
    .then(response => response.data);
}

export function postSubscription(msisdn, subscription) {
  return axios
    .post(`${ENDPOINTS.SUBSCRIPTIONS.POST.URL}${msisdn}/subscriptions`, subscription)
    .then(response => response.data);
}

export function deleteSubscription(msisdn, subscriptionName) {
  return axios
    .delete(`${ENDPOINTS.SUBSCRIPTIONS.DELETE.URL}${msisdn}/subscriptions/${subscriptionName}`)
    .then(response => response.data);
}

export function* getSubscriptions(action) {
  try {
    const { msisdn } = action;
    const subscriptions = yield call(fetchSubscriptions, msisdn);
    yield put({ type: types.GET_SUBSCRIPTIONS_SUCCESS, data: subscriptions });
  } catch (error) {
    yield put({ type: types.GET_SUBSCRIPTIONS_FAILED, error });
  }
}

export function* addSubscription(action) {
  try {
    const { msisdn, subscription } = action;
    const subscriptionDetails = yield call(postSubscription, msisdn, subscription);
    yield put({ type: types.ADD_SUBSCRIPTION_SUCCESS, data: subscriptionDetails });
  } catch (error) {
    yield put({ type: types.ADD_SUBSCRIPTION_FAILED, error });
  }
}

export function* removeSubscription(action) {
  try {
    const { msisdn, subscriptionName } = action;
    const subscriptionDetails = yield call(deleteSubscription, msisdn, subscriptionName);
    yield put({ type: types.ADD_SUBSCRIPTION_SUCCESS, data: subscriptionDetails });
  } catch (error) {
    yield put({ type: types.ADD_SUBSCRIPTION_FAILED, error });
  }
}

export const subscriptionSaga = [
  takeLatest(types.GET_SUBSCRIPTIONS, getSubscriptions),
  takeLatest(types.ADD_SUBSCRIPTION, addSubscription),
  takeLatest(types.DELETE_SUBSCRIPTION, removeSubscription),
];
