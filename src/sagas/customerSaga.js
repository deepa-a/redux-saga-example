import { call, put, take, takeLatest, select } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';
import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';

export function* fetchCustomerDetails(customerId) {
  try {
    const customerDetails = yield axios.get(`customers/${customerId}`).then(response => response.data);
    yield put({ type: types.CUSTOMER_RECEIVED, data: customerDetails });
  } catch (error) {
    yield put({ type: types.CUSTOMER_REQUEST_FAILED, error });
  }
}
