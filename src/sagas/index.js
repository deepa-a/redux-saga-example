import { all, fork } from 'redux-saga/effects';
import { subscriberWatcher } from './subscriberSaga';
import { fetchUserRoles } from './getUserRolesSaga';

export default function* rootSaga() {
  yield all([
    fork(fetchUserRoles),
    fork(subscriberWatcher),
  ]);
}
