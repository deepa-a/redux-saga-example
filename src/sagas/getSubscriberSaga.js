import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';
import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';


function setMsisdn(msisdn) {
  sessionStorage.setItem('msisdn', JSON.stringify(msisdn));
}

function getMsisdn() {
  return JSON.parse(sessionStorage.getItem('msisdn'));
}

function* fetchSubscriberDetails() {
  try {
    const subscriberDetails = yield axios.get('/subscribers/61444444444').then(response => response.data);
    yield call(setMsisdn, subscriberDetails.msisdn);
    yield put({ type: types.SUBSCRIBER_RECEIVED, data: subscriberDetails });
  } catch (error) {
    yield put({ type: types.SUBSCRIBER_REQUEST_FAILED, error });
  }
}


export function* subscriberWatcher() {
  yield takeLatest(types.GET_SUBSCRIBER, fetchSubscriberDetails);
}
