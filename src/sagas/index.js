import { call, all, fork, put, takeLatest } from 'redux-saga/effects';
import { subscriberWatcher, subscriberSaga } from 'sagas/subscriberSaga';
import { customerSaga } from 'sagas/customerSaga';
import { billingAccountSaga } from 'sagas/billingAccountSaga';
import { subscriptionSaga } from 'sagas/subscriptionSaga';
import { fundsSaga } from 'sagas/fundsSaga';
import * as types from 'actions/actionTypes';
import { userRoleSaga } from './getUserRolesSaga';

export default function* rootSaga() {
  yield all([
    subscriberWatcher(),
    ...userRoleSaga,
    ...fundsSaga,
    ...customerSaga,
    ...billingAccountSaga,
    ...subscriberSaga,
    ...subscriptionSaga,
  ]);
}
