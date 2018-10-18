import { all } from 'redux-saga/effects';
import { subscriberWatcher } from './getSubscriberSaga';
import { fetchUserRoles } from './getUserRolesSaga';

export default function* rootSaga() {
  yield all([
    fetchUserRoles(),
    subscriberWatcher(),
  ]);
}
