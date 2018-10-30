import { all, call, put, take, takeLatest, select } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';

export function fetchCustomer(customerId) {
    return axios.get(`${ENDPOINTS.CUSTOMER.GET.URL}${customerId}`).then(response => response.data);
}

export function saveCustomer(customer) {
    return axios.post(`${ENDPOINTS.CUSTOMER.POST.URL}`, customer).then(response => response.data);
}

export function patchCustomer(customerId, customer) {
    return axios.patch(`${ENDPOINTS.CUSTOMER.PATCH.URL}${customerId}`, customer).then(response => response.data);
}

export function* fetchCustomerDetails(action) {
  const { flag, customerId } = action;
  try {
    const actionType = (flag === 'SUB') ? types.SUB_CUSTOMER_RECEIVED : types.CUSTOMER_RECEIVED;
    const customerDetails = yield call(fetchCustomer, customerId);
    yield put({ type: actionType, data: customerDetails });
  } catch (error) {
    const actionType = (flag === 'SUB') ? types.SUB_CUSTOMER_REQUEST_FAILED : types.CUSTOMER_REQUEST_FAILED;
    yield put({ type: actionType, error });
  }
}

export function* createCustomer(action) {
  try {
    const { customer } = action;
    const customerDetails = yield call(saveCustomer, customer);
    yield put({ type: types.CREATE_CUSTOMER_SUCCESS, data: customerDetails });
  } catch (error) {
    yield put({ type: types.CREATE_CUSTOMER_FAILED, error });
  }
}

export function* updateCustomer(action) {
  try {
    const { customer, customerId } = action;
    const customerDetails = yield call(patchCustomer, customerId, customer);
    yield put({ type: types.UPDATE_CUSTOMER_SUCCESS, data: customerDetails });
  } catch (error) {
    yield put({ type: types.UPDATE_CUSTOMER_FAILED, error });
  }
}

export function* customerSaga() {
  yield all([
    takeLatest(types.GET_CUSTOMER, fetchCustomerDetails),
    takeLatest(types.CREATE_CUSTOMER, createCustomer),
    takeLatest(types.UPDATE_CUSTOMER, updateCustomer),
  ])
}