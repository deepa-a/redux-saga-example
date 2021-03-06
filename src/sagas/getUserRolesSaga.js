import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';

export function fetchUsers() {
  return axios.get('http://127.0.0.1:5060?file=roles').then(response => response.data);
}

export function* fetchUserRoles() {
  try {
    const roles = yield call(fetchUsers);
    yield put({ type: types.USER_ROLES_RECEIVED, data: roles });
  } catch (error) {
    yield put({ type: types.USER_ROLES_REQUEST_FAILED, error });
  }
}

export const userRoleSaga = [takeLatest(types.GET_USER_ROLES, fetchUserRoles)];
