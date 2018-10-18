import { call, put, takeLatest } from 'redux-saga/effects';
import * as types from 'actions/actionTypes';
import { API_BASE_URL, ENDPOINTS } from '../constants/apiEndpoints';
import axios from '../utils/axios';


export function* fetchUserRoles(dispatch) {
  try {
    yield put({ type: types.GET_USER_ROLES });
    const roles = yield axios.get('http://127.0.0.1:5060').then(response => response.data);
    yield put({ type: types.USER_ROLES_RECEIVED, data: roles });
  } catch (error) {
    yield put({ type: types.USER_ROLES_REQUEST_FAILED, error });
  }
}
