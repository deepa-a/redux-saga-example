import { call, put, take, takeLatest, select } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';
import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';

export function* fetchBillingAccountDetails(baid) {
  try {
    const billingAccountDetails = yield axios.get(`billingaccounts/${baid}`).then(response => response.data);
    yield put({ type: types.BILLING_ACCOUNT_RECEIVED, data: billingAccountDetails });
  } catch (error) {
    yield put({ type: types.BILLING_ACCOUNT_REQUEST_FAILED, error });
  }
}
