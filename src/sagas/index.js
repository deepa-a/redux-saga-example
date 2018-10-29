import { call, all, fork, put, takeLatest } from 'redux-saga/effects';
import { subscriberWatcher, subscriberSaga } from 'sagas/subscriberSaga';
import { customerSaga } from 'sagas/customerSaga';
import { billingAccountSaga } from 'sagas/billingAccountSaga';
import * as types from 'actions/actionTypes';
import { fetchUserRoles } from './getUserRolesSaga';

export default function* rootSaga() {
  yield  call(fetchUserRoles);
  yield all([
    subscriberWatcher(),
    subscriberSaga(),
    billingAccountSaga(),
    customerSaga(),
      /* put({type: types.CREATE_SUBSCRIBER, subscriber: {
        "accountProfile": "3GMID00",
        "baid": "",
        "commercialOffer": "2GPPLUS",
        "email": "",
        "imsi": "505155412565245",
        "isTestService": false,
        "language": null,
        "msisdn": "61422332222",
        "serviceProviderId": "0002",
        "status": "PREACTIVE"
    }})
       put({type: types.UPDATE_SUBSCRIBER, subscriber: {
          "accountProfile": "10BOOSTM",
      }, msisdn: '61411111111'})
     /* put({type: types.CREATE_CUSTOMER, customer:
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
