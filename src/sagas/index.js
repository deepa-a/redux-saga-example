import { all, fork, put, takeLatest } from 'redux-saga/effects';
import { subscriberWatcher, createSubscriber, updateSubscriber } from 'sagas/subscriberSaga';
import { fetchCustomerDetails, createCustomer, updateCustomer } from 'sagas/customerSaga';
import { fetchBillingAccountDetails, createBillingAccount, updateBillingAccount } from 'sagas/billingAccountSaga';
import * as types from 'actions/actionTypes';
import { fetchUserRoles } from './getUserRolesSaga';

export default function* rootSaga() {
  yield all([
    fork(fetchUserRoles),
    fork(subscriberWatcher),
    takeLatest(types.CREATE_SUBSCRIBER, createSubscriber),
    takeLatest(types.UPDATE_SUBSCRIBER, updateSubscriber),
    takeLatest(types.GET_CUSTOMER, fetchCustomerDetails),
    takeLatest(types.CREATE_CUSTOMER, createCustomer),
    takeLatest(types.UPDATE_CUSTOMER, updateCustomer),
    takeLatest(types.GET_BILLING_ACCOUNT, fetchBillingAccountDetails),
    takeLatest(types.CREATE_BILLING_ACCOUNT, createBillingAccount),
    takeLatest(types.UPDATE_BILLING_ACCOUNT, updateBillingAccount),
    /* put({type: types.CREATE_SUBSCRIBER, subscriber: {
        "accountProfile": "3GMID00",
        "baid": "",
        "commercialOffer": "2GPPLUS",
        "email": "",
        "imsi": "505155412535245",
        "isTestService": false,
        "language": null,
        "msisdn": "61422222222",
        "serviceProviderId": "0002",
        "status": "PREACTIVE"
    }})
      put({type: types.UPDATE_SUBSCRIBER, subscriber: {
          "accountProfile": "10BOOSTM",
          "baid": "",
      }, msisdn: '61411111111'})
      put({type: types.CREATE_CUSTOMER, customer:
      {
          "customerId":"1030004256",
          "rou":"BCC",
          "postCode":"3000"
      }}),
      put({type: types.UPDATE_CUSTOMER, customer:
      {
            "postCode":"3003"
      }, customerId: "1030004256" })
      put({type: types.GET_CUSTOMER, customerId: "1030004256" })
      put({type: types.CREATE_BILLING_ACCOUNT, billingAccount:
      {
          "customerId":"1020004255",
          "baid":"3402000426",
          "billCycle":"5",
          "nextBillCycle":""
      }})
      put({type: types.UPDATE_BILLING_ACCOUNT, billingAccount:
      {
          "nextBillCycle":"5"
      }, baid: "3402000426" })
      put({type: types.GET_BILLING_ACCOUNT, baid: "3402000426" })*/
  ]);
}
