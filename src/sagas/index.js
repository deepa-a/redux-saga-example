import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { subscriberWatcher, createSubscriber, updateSubscriber } from 'sagas/subscriberSaga';
import { createCustomer, updateCustomer } from 'sagas/customerSaga';
import { createBillingAccount, updateBillingAccount } from 'sagas/billingAccountSaga';
import { fetchUserRoles } from './getUserRolesSaga';
import * as types from 'actions/actionTypes';

export default function* rootSaga() {
  yield all([
    fork(fetchUserRoles),
    fork(subscriberWatcher),
    takeLatest(types.CREATE_SUBSCRIBER, createSubscriber),
    takeLatest(types.UPDATE_SUBSCRIBER, updateSubscriber),
    takeLatest(types.CREATE_CUSTOMER, createCustomer),
    takeLatest(types.UPDATE_CUSTOMER, updateCustomer),
    takeLatest(types.CREATE_BILLING_ACCOUNT, createBillingAccount),
    takeLatest(types.UPDATE_BILLING_ACCOUNT, updateBillingAccount),
    /*put({type: types.CREATE_SUBSCRIBER, subscriber: {accountProfile: "10BOOSTM",
        baid: "",
        commercialOffer: "3GPPCAP",
        email: "",
        imsi: "505155412545998",
        isTestService: false,
        language: null,
        msisdn: "61411111111",
        serviceProviderId: "0002",
        status: "PREACTIVE"}})*/
  ]);
}
