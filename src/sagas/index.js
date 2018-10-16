import { all } from 'redux-saga/effects';
import { subscriberWatcher } from './getSubscriberSaga';


export default function* rootSaga() {
  yield all([
    subscriberWatcher(),
  ]);
}
