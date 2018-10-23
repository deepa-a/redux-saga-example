import { call, put, take, takeLatest, select } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';
import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';

export function* fetchCustomerDetails(obj) {
  try {
    const action = (obj.flag === 'SUB')? types.SUB_CUSTOMER_RECEIVED : types.CUSTOMER_RECEIVED;
    const customerDetails = yield axios.get(`customers/${obj.customerId}`).then(response => response.data);
    yield put({ type: action, data: customerDetails });
  } catch (error) {
    const action = (obj.flag === 'SUB')? types.SUB_CUSTOMER_REQUEST_FAILED : types.CUSTOMER_REQUEST_FAILED;
    yield put({ type: action, error });
  }
}
