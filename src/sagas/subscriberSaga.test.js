import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import { call, put, take, select, actionChannel } from 'redux-saga/effects';
import { channel } from 'redux-saga';
import { createSubscriber,
  updateSubscriber,
  fetchSubscriberDetails,
  subscriberWatcher,
  fetchSubscriber,
  removeSubscriber,
  saveSubscriber,
  patchSubscriber,
  deleteSubscriber,
  setMsisdn } from './subscriberSaga';
import * as types from '../actions/actionTypes';
import { fetchBillingAccountDetails } from './billingAccountSaga';
import { fetchCustomerDetails } from './customerSaga';
import { getSubscriberBaid, getCustomerId } from '../selectors';
import { ENDPOINTS } from '../constants/apiEndpoints';


describe('Testing Subscriber Saga', () => {
  describe('Watch GET_SUBCRIBER action', () => {
    const generator = subscriberWatcher();
    const mockChannel = channel();
    const actChannel = actionChannel(types.GET_SUBSCRIBER);
    const payload = { msisdn: '61411111111' };
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

  describe('Fetch subscriber details saga', () => {
    it('can fetch subscriber successfully', () => {
      const action = {
        msisdn: '61411111111',
        type: 'GET_SUBSCRIBER',
      };
      const response = { msisdn: '61411111111', baid: '3402000425', balances: [], counters: [{ balanceId: '2', templateId: 21112, units: 'Money', value: 0, type: 'CURRENCY', balanceName: 'INTERNAL', expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: 'infinity' }], accountType: 'PrePaid', imsi: '505155412545985', serviceProviderId: '0002', glCode: 'SMGNT', accountProfile: '10BOOSTT', commercialOffer: '2GPPLUS', email: '', brandName: 'Telstra', isTestService: false, status: 'PREACTIVE', spaName: null, creationDate: '2018-10-24T11:33:31.000+11:00', beginValidityDate: '2018-10-24T11:33:31.000+11:00', endValidityDate: '2020-10-23T23:59:59.000+11:00', beginActivityDate: '2018-10-24T11:33:31.000+11:00', endActivityDate: '2020-10-23T23:59:59.000+11:00', endInactivityDate: '2019-04-27T11:33:31.000+10:00', lowCreditSettings: { isAutoPaymentEnabled: false, autoPaymentTriggerThreshold: 0, autoPaymentAmount: 0, isWarningEnabled: false, warningThreshold: 0 }, spendLimits: [], isVoucherTopupEnabled: true, failedVoucherTopupAttempts: 0, hasHadFirstEvent: true, isSuspended: false, language: 'EN', customAttributes: {}, mainBalance: { balanceId: null, templateId: null, units: null, value: 0, type: null, balanceName: null, expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: null }, notificationPreferences: { channels: ['sms'], disableAll: false, enableMarketingNotifications: null, enableLowCreditNotifications: false, options: [{ name: 'sms' }, { name: 'email' }] }, fnf: null, lastRechargeAmount: 0, lastRechargeDate: null, lastTopupProfile: null, lastCommercialOffer: null, ocsstatus: 'Preactive', spaId: null };
      const generator = fetchSubscriberDetails(action);

      expect(generator.next(action.msisdn).value).toEqual(call(fetchSubscriber, action.msisdn));
      expect(generator.next(response).value).toEqual(call(setMsisdn, response.msisdn));
      expect(generator.next(response).value).toEqual(put({ type: types.SUBSCRIBER_RECEIVED, data: response }));
    });

    it('can handle exception', () => {
      const action = {
        msisdn: '61411111111',
        type: 'GET_SUBSCRIBER',
      };
      const generator = fetchSubscriberDetails(action);
      expect(generator.next(action.msisdn).value).toEqual(call(fetchSubscriber, action.msisdn));
      expect(generator.throw('error').value).toEqual(put({ type: types.SUBSCRIBER_REQUEST_FAILED, error: 'error' }));
    });
  });

  describe('Save subscriber saga', () => {
    it('can create subscriber successfully', () => {
      const action = {
        type: 'CREATE_SUBSCRIBER',
        subscriber: { msisdn: '61455555555', baid: '', commercialOffer: 'FPLUSMBB', status: 'PREACTIVE', accountProfile: '20BOOSTS', imsi: '505155413125985', serviceProviderId: '0002', language: null, email: '', isTestService: false },
      };
      const response = { msisdn: '61455555555', baid: null, balances: [], counters: [{ balanceId: '2', templateId: 21112, units: 'Money', value: 0, type: 'CURRENCY', balanceName: 'INTERNAL', expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: 'infinity' }], accountType: 'PrePaid', imsi: '505155413125985', serviceProviderId: '0002', glCode: '', accountProfile: '20BOOSTS', commercialOffer: 'FPLUSMBB', email: '', brandName: 'Telstra', isTestService: false, status: 'PREACTIVE', spaName: null, creationDate: '2018-10-30T11:29:00.000+11:00', beginValidityDate: '2018-10-30T11:29:00.000+11:00', endValidityDate: '2020-10-29T23:59:59.000+11:00', beginActivityDate: '2018-10-30T11:29:00.000+11:00', endActivityDate: '2020-10-29T23:59:59.000+11:00', endInactivityDate: '2019-05-03T11:29:00.000+10:00', lowCreditSettings: { isAutoPaymentEnabled: false, autoPaymentTriggerThreshold: 0, autoPaymentAmount: 0, isWarningEnabled: false, warningThreshold: 0 }, spendLimits: [], isVoucherTopupEnabled: true, failedVoucherTopupAttempts: 0, hasHadFirstEvent: true, isSuspended: false, language: 'EN', customAttributes: {}, mainBalance: { balanceId: null, templateId: null, units: null, value: 0, type: null, balanceName: null, expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: null }, notificationPreferences: { channels: ['sms'], disableAll: false, enableMarketingNotifications: null, enableLowCreditNotifications: false, options: [{ name: 'sms' }, { name: 'email' }] }, fnf: null, lastRechargeAmount: 0, lastRechargeDate: null, lastTopupProfile: null, lastCommercialOffer: null, spaId: null, ocsstatus: 'Preactive' };
      const generator = createSubscriber(action);

      expect(generator.next(action.subscriber).value).toEqual(call(saveSubscriber, action.subscriber));
      expect(generator.next(response).value).toEqual(put({ type: types.CREATE_SUBSCRIBER_SUCCESS, data: response }));
    });

    it('can handle exception', () => {
      const action = {
        type: 'CREATE_SUBSCRIBER',
        subscriber: { msisdn: '61455555555', baid: '', commercialOffer: 'FPLUSMBB', status: 'PREACTIVE', accountProfile: '20BOOSTS', imsi: '505155413125985', serviceProviderId: '0002', language: null, email: '', isTestService: false },
      };
      const generator = createSubscriber(action);
      expect(generator.next(action.subscriber).value).toEqual(call(saveSubscriber, action.subscriber));
      expect(generator.throw('error').value).toEqual(put({ type: types.CREATE_SUBSCRIBER_FAILED, error: 'error' }));
    });
  });

  describe('Update subscriber saga', () => {
    it('can update subscriber successfully', () => {
      const action = {
        type: 'UPDATE_SUBSCRIBER',
        msisdn: '61455555555',
        subscriber: { baid: '', accountProfile: '10BOOSTS' },
      };
      const response = { msisdn: '61455555555', baid: null, balances: [], counters: [{ balanceId: '2', templateId: 21112, units: 'Money', value: 0, type: 'CURRENCY', balanceName: 'INTERNAL', expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: 'infinity' }], accountType: 'PrePaid', imsi: '505155413125985', serviceProviderId: '0002', glCode: '', accountProfile: '10BOOSTS', commercialOffer: 'FPLUSMBB', email: '', brandName: 'Telstra', isTestService: false, status: 'PREACTIVE', spaName: null, creationDate: '2018-10-30T11:29:00.000+11:00', beginValidityDate: '2018-10-30T11:29:00.000+11:00', endValidityDate: '2020-10-29T23:59:59.000+11:00', beginActivityDate: '2018-10-30T11:29:00.000+11:00', endActivityDate: '2020-10-29T23:59:59.000+11:00', endInactivityDate: '2019-05-03T11:29:00.000+10:00', lowCreditSettings: { isAutoPaymentEnabled: false, autoPaymentTriggerThreshold: 0, autoPaymentAmount: 0, isWarningEnabled: false, warningThreshold: 0 }, spendLimits: [], isVoucherTopupEnabled: true, failedVoucherTopupAttempts: 0, hasHadFirstEvent: true, isSuspended: false, language: 'EN', customAttributes: {}, mainBalance: { balanceId: null, templateId: null, units: null, value: 0, type: null, balanceName: null, expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: null }, notificationPreferences: { channels: ['sms'], disableAll: false, enableMarketingNotifications: null, enableLowCreditNotifications: false, options: [{ name: 'sms' }, { name: 'email' }] }, fnf: null, lastRechargeAmount: 0, lastRechargeDate: null, lastTopupProfile: null, lastCommercialOffer: null, spaId: null, ocsstatus: 'Preactive' };
      const generator = updateSubscriber(action);

      expect(generator.next(action.subscriber).value).toEqual(call(patchSubscriber, action.msisdn, action.subscriber));
      expect(generator.next(response).value).toEqual(put({ type: types.UPDATE_SUBSCRIBER_SUCCESS, data: response }));
    });

    it('can handle exception', () => {
      const action = {
        type: 'UPDATE_SUBSCRIBER',
        msisdn: '61455555555',
        subscriber: { baid: '', accountProfile: '10BOOSTS' },
      };
      const generator = updateSubscriber(action);
      expect(generator.next(action.subscriber).value).toEqual(call(patchSubscriber, action.msisdn, action.subscriber));
      expect(generator.throw('error').value).toEqual(put({ type: types.UPDATE_SUBSCRIBER_FAILED, error: 'error' }));
    });
  });

  describe('Remove subscriber saga', () => {
    it('can remove subscriber successfully', () => {
      const action = {
        type: 'DELETE_SUBSCRIBER',
        msisdn: '61455555555',
      };
      const generator = removeSubscriber(action);
      expect(generator.next(action.msisdn).value).toEqual(call(deleteSubscriber, action.msisdn));
      expect(generator.next().value).toEqual(put({ type: types.DELETE_SUBSCRIBER_SUCCESS }));
    });

    it('can handle exception', () => {
      const action = {
        type: 'DELETE_SUBSCRIBER',
        msisdn: '61455555555',
      };
      const generator = removeSubscriber(action);
      expect(generator.next(action.msisdn).value).toEqual(call(deleteSubscriber, action.msisdn));
      expect(generator.throw('error').value).toEqual(put({ type: types.DELETE_SUBSCRIBER_FAILED, error: 'error' }));
    });
  });

  describe('Subscriber API Test', () => {
    beforeEach(() => {
      moxios.install();
    });
    it('can fetch subscriber', (done) => {
      const msisdn = '61411111111';
      const onFulfilled = sinon.spy();

      moxios.stubRequest(`${ENDPOINTS.SUBSCRIBER.GET.URL}${msisdn}`, {
        status: 200,
        response: { msisdn: '61411111111', baid: '3402000425', balances: [], counters: [{ balanceId: '2', templateId: 21112, units: 'Money', value: 0, type: 'CURRENCY', balanceName: 'INTERNAL', expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: 'infinity' }], accountType: 'PrePaid', imsi: '505155412545985', serviceProviderId: '0002', glCode: 'SMGNT', accountProfile: '10BOOSTT', commercialOffer: '2GPPLUS', email: '', brandName: 'Telstra', isTestService: false, status: 'PREACTIVE', spaName: null, creationDate: '2018-10-24T11:33:31.000+11:00', beginValidityDate: '2018-10-24T11:33:31.000+11:00', endValidityDate: '2020-10-23T23:59:59.000+11:00', beginActivityDate: '2018-10-24T11:33:31.000+11:00', endActivityDate: '2020-10-23T23:59:59.000+11:00', endInactivityDate: '2019-04-27T11:33:31.000+10:00', lowCreditSettings: { isAutoPaymentEnabled: false, autoPaymentTriggerThreshold: 0, autoPaymentAmount: 0, isWarningEnabled: false, warningThreshold: 0 }, spendLimits: [], isVoucherTopupEnabled: true, failedVoucherTopupAttempts: 0, hasHadFirstEvent: true, isSuspended: false, language: 'EN', customAttributes: {}, mainBalance: { balanceId: null, templateId: null, units: null, value: 0, type: null, balanceName: null, expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: null }, notificationPreferences: { channels: ['sms'], disableAll: false, enableMarketingNotifications: null, enableLowCreditNotifications: false, options: [{ name: 'sms' }, { name: 'email' }] }, fnf: null, lastRechargeAmount: 0, lastRechargeDate: null, lastTopupProfile: null, lastCommercialOffer: null, ocsstatus: 'Preactive', spaId: null },
      });
      axios.get(`${ENDPOINTS.SUBSCRIBER.GET.URL}${msisdn}`).then(onFulfilled);
      moxios.wait(() => {
        expect(onFulfilled.called).toEqual(true);
        expect(onFulfilled.getCall(0).args[0].data.msisdn).toEqual('61411111111');
        done();
      });
    });
    it('should create subscriber', (done) => {
      const onFulfilled = sinon.spy();
      const subscriber = { msisdn: '61455555555', baid: '', commercialOffer: 'FPLUSMBB', status: 'PREACTIVE', accountProfile: '20BOOSTS', imsi: '505155413125985', serviceProviderId: '0002', language: null, email: '', isTestService: false };
      moxios.stubRequest(`${ENDPOINTS.SUBSCRIBER.POST.URL}`, {
        status: 200,
        response: { msisdn: '61455555555', baid: null, balances: [], counters: [{ balanceId: '2', templateId: 21112, units: 'Money', value: 0, type: 'CURRENCY', balanceName: 'INTERNAL', expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: 'infinity' }], accountType: 'PrePaid', imsi: '505155413125985', serviceProviderId: '0002', glCode: '', accountProfile: '20BOOSTS', commercialOffer: 'FPLUSMBB', email: '', brandName: 'Telstra', isTestService: false, status: 'PREACTIVE', spaName: null, creationDate: '2018-10-30T11:29:00.000+11:00', beginValidityDate: '2018-10-30T11:29:00.000+11:00', endValidityDate: '2020-10-29T23:59:59.000+11:00', beginActivityDate: '2018-10-30T11:29:00.000+11:00', endActivityDate: '2020-10-29T23:59:59.000+11:00', endInactivityDate: '2019-05-03T11:29:00.000+10:00', lowCreditSettings: { isAutoPaymentEnabled: false, autoPaymentTriggerThreshold: 0, autoPaymentAmount: 0, isWarningEnabled: false, warningThreshold: 0 }, spendLimits: [], isVoucherTopupEnabled: true, failedVoucherTopupAttempts: 0, hasHadFirstEvent: true, isSuspended: false, language: 'EN', customAttributes: {}, mainBalance: { balanceId: null, templateId: null, units: null, value: 0, type: null, balanceName: null, expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: null }, notificationPreferences: { channels: ['sms'], disableAll: false, enableMarketingNotifications: null, enableLowCreditNotifications: false, options: [{ name: 'sms' }, { name: 'email' }] }, fnf: null, lastRechargeAmount: 0, lastRechargeDate: null, lastTopupProfile: null, lastCommercialOffer: null, spaId: null, ocsstatus: 'Preactive' },
      });
      axios.post(`${ENDPOINTS.SUBSCRIBER.POST.URL}`, subscriber).then(onFulfilled);
      moxios.wait(() => {
        expect(onFulfilled.called).toEqual(true);
        expect(onFulfilled.getCall(0).args[0].data.msisdn).toEqual('61455555555');
        done();
      });
    });
    it('should update subscriber', (done) => {
      const onFulfilled = sinon.spy();
      const msisdn = '61455555555';
      const subscriber = { baid: '', accountProfile: '10BOOSTS' };
      moxios.stubRequest(`${ENDPOINTS.SUBSCRIBER.PATCH.URL}`, {
        status: 200,
        response: { msisdn: '61455555555', baid: null, balances: [], counters: [{ balanceId: '2', templateId: 21112, units: 'Money', value: 0, type: 'CURRENCY', balanceName: 'INTERNAL', expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: 'infinity' }], accountType: 'PrePaid', imsi: '505155413125985', serviceProviderId: '0002', glCode: '', accountProfile: '10BOOSTS', commercialOffer: 'FPLUSMBB', email: '', brandName: 'Telstra', isTestService: false, status: 'PREACTIVE', spaName: null, creationDate: '2018-10-30T11:29:00.000+11:00', beginValidityDate: '2018-10-30T11:29:00.000+11:00', endValidityDate: '2020-10-29T23:59:59.000+11:00', beginActivityDate: '2018-10-30T11:29:00.000+11:00', endActivityDate: '2020-10-29T23:59:59.000+11:00', endInactivityDate: '2019-05-03T11:29:00.000+10:00', lowCreditSettings: { isAutoPaymentEnabled: false, autoPaymentTriggerThreshold: 0, autoPaymentAmount: 0, isWarningEnabled: false, warningThreshold: 0 }, spendLimits: [], isVoucherTopupEnabled: true, failedVoucherTopupAttempts: 0, hasHadFirstEvent: true, isSuspended: false, language: 'EN', customAttributes: {}, mainBalance: { balanceId: null, templateId: null, units: null, value: 0, type: null, balanceName: null, expiryDate: null, startDate: null, isSharedBundle: false, initialAmount: null }, notificationPreferences: { channels: ['sms'], disableAll: false, enableMarketingNotifications: null, enableLowCreditNotifications: false, options: [{ name: 'sms' }, { name: 'email' }] }, fnf: null, lastRechargeAmount: 0, lastRechargeDate: null, lastTopupProfile: null, lastCommercialOffer: null, spaId: null, ocsstatus: 'Preactive' },
      });
      axios.post(`${ENDPOINTS.SUBSCRIBER.PATCH.URL}`, subscriber).then(onFulfilled);
      moxios.wait(() => {
        expect(onFulfilled.called).toEqual(true);
        expect(onFulfilled.getCall(0).args[0].data.msisdn).toEqual('61455555555');
        expect(onFulfilled.getCall(0).args[0].data.accountProfile).toEqual('10BOOSTS');
        done();
      });
    });
    afterEach(() => {
      moxios.uninstall();
    });
  });
});
