import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import { call, put, take, select, actionChannel } from 'redux-saga/effects';
import { channel, runSaga } from 'redux-saga';
import { cloneableGenerator } from 'redux-saga/utils';
import {
    createSubscriber,
    updateSubscriber,
    fetchSubscriberDetails,
    subscriberWatcher
} from '../sagas/subscriberSaga';

import * as types from '../actions/actionTypes';
import { fetchBillingAccountDetails } from '../sagas/billingAccountSaga';
import { fetchCustomerDetails } from '../sagas/customerSaga';
import { getSubscriberBaid, getCustomerId } from '../selectors';
import {  ENDPOINTS } from '../constants/apiEndpoints';

beforeEach(() => {
   moxios.install();
});

describe('can watch get subscriber action', () => {
    const generator = subscriberWatcher();
    const mockChannel = channel();
    const actChannel = actionChannel(types.GET_SUBSCRIBER);
    const payload = { msisdn: '61411111111'};
    const baid = '3402000425';
    const customerId = '1020004255';

    it('can create an actionChannel and call fetch subscriber', () => {
        expect(generator.next().value).toEqual(actChannel);
        expect(generator.next(mockChannel).value).toEqual(take(mockChannel));
        expect(generator.next(payload).value).toEqual(call(fetchSubscriberDetails, payload));
    });
    it('can call fetch billingAccount', () => {
        expect(generator.next().value).toEqual(select(getSubscriberBaid));
        expect(generator.next(baid).value).toEqual(put({ type: types.GET_SUB_BILLING_ACCOUNT }));
        expect(generator.next().value).toEqual(call(fetchBillingAccountDetails, { baid, flag: 'SUB' }));
    });
    it('can call fetch customer', () => {
       expect(generator.next().value).toEqual(select(getCustomerId));
       expect(generator.next(customerId).value).toEqual(put({ type: types.GET_SUB_CUSTOMER }));
       expect(generator.next().value).toEqual(call(fetchCustomerDetails, { customerId, flag: 'SUB' }));
    });
});

it('can fetch subscriber', (done) => {
    const msisdn = '61411111111';

    let onFulfilled = sinon.spy();
    moxios.stubRequest(`${ENDPOINTS.SUBSCRIBER.GET.URL}${msisdn}`, {
      status: 200,
      response: {"msisdn":"61411111111","baid":"3402000425","balances":[],"counters":[{"balanceId":"2","templateId":21112,"units":"Money","value":0,"type":"CURRENCY","balanceName":"INTERNAL","expiryDate":null,"startDate":null,"isSharedBundle":false,"initialAmount":"infinity"}],"accountType":"PrePaid","imsi":"505155412545985","serviceProviderId":"0002","glCode":"SMGNT","accountProfile":"10BOOSTT","commercialOffer":"2GPPLUS","email":"","brandName":"Telstra","isTestService":false,"status":"PREACTIVE","spaName":null,"creationDate":"2018-10-24T11:33:31.000+11:00","beginValidityDate":"2018-10-24T11:33:31.000+11:00","endValidityDate":"2020-10-23T23:59:59.000+11:00","beginActivityDate":"2018-10-24T11:33:31.000+11:00","endActivityDate":"2020-10-23T23:59:59.000+11:00","endInactivityDate":"2019-04-27T11:33:31.000+10:00","lowCreditSettings":{"isAutoPaymentEnabled":false,"autoPaymentTriggerThreshold":0,"autoPaymentAmount":0,"isWarningEnabled":false,"warningThreshold":0},"spendLimits":[],"isVoucherTopupEnabled":true,"failedVoucherTopupAttempts":0,"hasHadFirstEvent":true,"isSuspended":false,"language":"EN","customAttributes":{},"mainBalance":{"balanceId":null,"templateId":null,"units":null,"value":0,"type":null,"balanceName":null,"expiryDate":null,"startDate":null,"isSharedBundle":false,"initialAmount":null},"notificationPreferences":{"channels":["sms"],"disableAll":false,"enableMarketingNotifications":null,"enableLowCreditNotifications":false,"options":[{"name":"sms"},{"name":"email"}]},"fnf":null,"lastRechargeAmount":0,"lastRechargeDate":null,"lastTopupProfile":null,"lastCommercialOffer":null,"ocsstatus":"Preactive","spaId":null}
    });
    axios.get(`${ENDPOINTS.SUBSCRIBER.GET.URL}${msisdn}`).then(onFulfilled);
    moxios.wait(() => {
      expect(onFulfilled.called).toEqual(true);
      expect(onFulfilled.getCall(0).args[0].data.msisdn).toEqual('61411111111');
      done();
    })
});

afterEach(() => {
   moxios.uninstall();
});