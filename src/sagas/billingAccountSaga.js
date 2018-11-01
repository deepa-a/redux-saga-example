import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';

export function fetchBillingAccount(baid) {
  return axios.get(`${ENDPOINTS.BILLING_ACCOUNT.GET.URL}${baid}`).then(response => response.data);
}

export function saveBillingAccount(billingAccount) {
  return axios.post(`${ENDPOINTS.BILLING_ACCOUNT.POST.URL}`, billingAccount).then(response => response.data);
}

export function patchBillingAccount(baid, billingAccount) {
  return axios.patch(`${ENDPOINTS.BILLING_ACCOUNT.PATCH.URL}${baid}`, billingAccount).then(response => response.data);
}

export function deleteBillingAccount(baid) {
  return axios.delete(`${ENDPOINTS.BILLING_ACCOUNT.DELETE.URL}${baid}`).then(response => response);
}

export function* fetchBillingAccountDetails(action) {
  const { flag, baid } = action;
  try {
    const actionType = (flag === 'SUB') ? types.SUB_BILLING_ACCOUNT_RECEIVED : types.BILLING_ACCOUNT_RECEIVED;
    const billingAccountDetails = yield call(fetchBillingAccount, baid);
    yield put({ type: actionType, data: billingAccountDetails });
  } catch (error) {
    const actionType = (flag === 'SUB') ? types.SUB_BILLING_ACCOUNT_REQUEST_FAILED : types.BILLING_ACCOUNT_REQUEST_FAILED;
    yield put({ type: actionType, error });
  }
}

export function* createBillingAccount(action) {
  try {
    const { billingAccount } = action;
    const billingDetails = yield call(saveBillingAccount, billingAccount);
    yield put({ type: types.CREATE_BILLING_ACCOUNT_SUCCESS, data: billingDetails });
  } catch (error) {
    yield put({ type: types.CREATE_BILLING_ACCOUNT_FAILED, error });
  }
}

export function* updateBillingAccount(action) {
  try {
    const { billingAccount, baid } = action;
    const billingDetails = yield call(patchBillingAccount, baid, billingAccount);
    yield put({ type: types.UPDATE_BILLING_ACCOUNT_SUCCESS, data: billingDetails });
  } catch (error) {
    yield put({ type: types.UPDATE_BILLING_ACCOUNT_FAILED, error });
  }
}

export function* removeBillingAccount(action) {
  try {
    const { baid } = action;
    yield call(deleteBillingAccount, baid);
    yield put({ type: types.DELETE_BILLING_ACCOUNT_SUCCESS });
  } catch (error) {
    yield put({ type: types.DELETE_BILLING_ACCOUNT_FAILED, error });
  }
}

export const billingAccountSaga = [
  takeLatest(types.CREATE_BILLING_ACCOUNT, createBillingAccount),
  takeLatest(types.GET_BILLING_ACCOUNT, fetchBillingAccountDetails),
  takeLatest(types.UPDATE_BILLING_ACCOUNT, updateBillingAccount),
  takeLatest(types.DELETE_BILLING_ACCOUNT, removeBillingAccount),
];
