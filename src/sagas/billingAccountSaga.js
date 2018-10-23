import { call, put, take, takeLatest, select } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';
import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';

export function* fetchBillingAccountDetails(obj) {
  try {
    const action = (obj.flag === 'SUB')? types.SUB_BILLING_ACCOUNT_RECEIVED : types.BILLING_ACCOUNT_RECEIVED;
    const billingAccountDetails = yield axios.get(`billingaccounts/${obj.baid}`).then(response => response.data);
    yield put({ type: action, data: billingAccountDetails });
  } catch (error) {
    const action = (obj.flag === 'SUB')? types.SUB_BILLING_ACCOUNT_REQUEST_FAILED : types.BILLING_ACCOUNT_REQUEST_FAILED;
    yield put({ type: action, error });
  }
}
