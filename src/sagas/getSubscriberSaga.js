import { put, takeLatest, all } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';
import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';
import { browserHistory } from 'react-router';

function* fetchSubscriberDetails() {
  const subscriberDetails = yield axios.get('/subscribers/61444444444').then((response) => {
      sessionStorage.setItem('msisdn', response.data.msisdn);
      return response.data;
  });

  yield put({ type: types.SUBSCRIBER_RECEIVED, data: subscriberDetails });

}


export function* subscriberWatcher() {
  yield takeLatest(types.GET_SUBSCRIBER, fetchSubscriberDetails);
}
