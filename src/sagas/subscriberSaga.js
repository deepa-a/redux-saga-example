import { call, put, take, takeLatest, select, actionChannel } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';
import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';
import { fetchBillingAccountDetails } from './billingAccountSaga';
import { fetchCustomerDetails } from './customerSaga';

const getSubscriber = state => state.subscriber;
const getBillingAccount = state => state.billingAccount;

function setMsisdn(msisdn) {
  sessionStorage.setItem('msisdn', JSON.stringify(msisdn));
}

function getMsisdn() {
  return JSON.parse(sessionStorage.getItem('msisdn'));
}

function* fetchSubscriberDetails(msisdn) {
  try {
    const subscriberDetails = yield axios.get('/subscribers/61444444444').then(response => response.data);
    yield call(setMsisdn, subscriberDetails.msisdn);
    yield put({ type: types.SUBSCRIBER_RECEIVED, data: subscriberDetails });
  } catch (error) {
    yield put({ type: types.SUBSCRIBER_REQUEST_FAILED, error });
  }
}

export function* subscriberWatcher() {
  let subChannel = yield actionChannel(types.GET_SUBSCRIBER);
  while (yield take(subChannel)) {
    yield call(fetchSubscriberDetails);
    const subscriber= yield select(getSubscriber);
    if(subscriber.details.baid) {
        yield put({type: types.GET_BILLING_ACCOUNT});
        yield call(fetchBillingAccountDetails, subscriber.details.baid);
    }
    const billingAccount = yield select(getBillingAccount);
    if(billingAccount.details.customerId) {
        yield put({type: types.GET_CUSTOMER});
        yield call(fetchCustomerDetails, billingAccount.details.customerId);
    }
  }
}
