import { call, put, take, takeLatest, select } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';
import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';

export function* fetchBillingAccountDetails(action) {
  const { flag, baid } = action;
  try {
    const actionType = (flag === 'SUB') ? types.SUB_BILLING_ACCOUNT_RECEIVED : types.BILLING_ACCOUNT_RECEIVED;
    const billingAccountDetails = yield axios.get(`${ENDPOINTS.BILLING_ACCOUNT.GET.URL}${baid}`).then(response => response.data);
    yield put({ type: actionType, data: billingAccountDetails });
  } catch (error) {
    const actionType = (flag === 'SUB') ? types.SUB_BILLING_ACCOUNT_REQUEST_FAILED : types.BILLING_ACCOUNT_REQUEST_FAILED;
    yield put({ type: actionType, error });
  }
}

export function* createBillingAccount(action) {
  try {
    const { billingAccount } = action;
    const billingDetails = yield axios.post(`${ENDPOINTS.BILLING_ACCOUNT.POST.URL}`, billingAccount).then(response => response.data);
    yield put({ type: types.CREATE_BILLING_ACCOUNT_SUCCESS, data: billingDetails });
  } catch (error) {
    yield put({ type: types.CREATE_BILLING_ACCOUNT_FAILED, error });
  }
}

export function* updateBillingAccount(action) {
  try {
    const { billingAccount, baid } = action;
    const billingDetails = yield axios.patch(`${ENDPOINTS.BILLING_ACCOUNT.PATCH.URL}${baid}`, billingAccount).then(response => response.data);
    yield put({ type: types.UPDATE_BILLING_ACCOUNT_SUCCESS, data: billingDetails });
  } catch (error) {
    yield put({ type: types.UPDATE_BILLING_ACCOUNT_FAILED, error });
  }
}
