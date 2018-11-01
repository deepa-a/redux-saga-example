import { call, all, fork, put, takeLatest } from 'redux-saga/effects';
import { subscriberWatcher, subscriberSaga } from 'sagas/subscriberSaga';
import { customerSaga } from 'sagas/customerSaga';
import { billingAccountSaga } from 'sagas/billingAccountSaga';
import { fundsSaga } from 'sagas/fundsSaga';
import * as types from 'actions/actionTypes';
import { fetchUserRoles } from './getUserRolesSaga';

export default function* rootSaga() {
  yield call(fetchUserRoles);
  yield all([
    subscriberWatcher(),
    subscriberSaga(),
    billingAccountSaga(),
    customerSaga(),
    fundsSaga(),
  ]);
}
