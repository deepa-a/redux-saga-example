import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import { call, put } from 'redux-saga/effects';
import { fetchBillingAccount,
  saveBillingAccount,
  patchBillingAccount,
  removeBillingAccount,
  deleteBillingAccount,
  fetchBillingAccountDetails,
  createBillingAccount,
  updateBillingAccount } from './billingAccountSaga';
import * as types from '../actions/actionTypes';
import { ENDPOINTS } from '../constants/apiEndpoints';

describe('Testing BillingAccount Saga', () => {
  describe('Fetch billing account details saga', () => {
    it('can fetch billing account details successfully', () => {
      const action = {
        baid: '3402000425',
        type: 'GET_BILLING_ACCOUNT',
      };
      const response = { baid: '3402000425', customerId: '1020004255', billCycle: 5, nextBillCycle: 0, subscribers: ['61411111111'], customAttributes: {} };
      const generator = fetchBillingAccountDetails(action);

      expect(generator.next(action.baid).value).toEqual(call(fetchBillingAccount, action.baid));
      expect(generator.next(response).value).toEqual(put({ type: types.BILLING_ACCOUNT_RECEIVED, data: response }));
    });

    it('can handle exception', () => {
      const action = {
        baid: '3402000425',
        type: 'GET_BILLING_ACCOUNT',
      };
      const generator = fetchBillingAccountDetails(action);
      expect(generator.next(action.baid).value).toEqual(call(fetchBillingAccount, action.baid));
      expect(generator.throw('error').value).toEqual(put({ type: types.BILLING_ACCOUNT_REQUEST_FAILED, error: 'error' }));
    });

    it('can fetch billing account details for subscriber successfully', () => {
      const action = {
        baid: '3402000425',
        type: 'GET_SUB_BILLING_ACCOUNT',
        flag: 'SUB',
      };

      const response = { baid: '3402000425', customerId: '1020004255', billCycle: 5, nextBillCycle: 0, subscribers: ['61411111111'], customAttributes: {} };
      const generator = fetchBillingAccountDetails(action);

      expect(generator.next(action.baid).value).toEqual(call(fetchBillingAccount, action.baid));
      expect(generator.next(response).value).toEqual(put({ type: types.SUB_BILLING_ACCOUNT_RECEIVED, data: response }));
    });

    it('can handle exception', () => {
      const action = {
        baid: '3402000425',
        type: 'GET_SUB_BILLING_ACCOUNT',
        flag: 'SUB',
      };
      const generator = fetchBillingAccountDetails(action);
      expect(generator.next(action.baid).value).toEqual(call(fetchBillingAccount, action.baid));
      expect(generator.throw('error').value).toEqual(put({ type: types.SUB_BILLING_ACCOUNT_REQUEST_FAILED, error: 'error' }));
    });
  });
  describe('Save billing account saga', () => {
    it('can create billing account successfully', () => {
      const action = {
        type: 'CREATE_BILLING_ACCOUNT',
        billingAccount: { baid: '3402000654', customerId: '1020004255', billCycle: '25', nextBillCycle: '' },
      };
      const response = { baid: '3402000654', customerId: '1020004255', billCycle: 25, nextBillCycle: 0, subscribers: [], customAttributes: {} };
      const generator = createBillingAccount(action);

      expect(generator.next(action.billingAccount).value).toEqual(call(saveBillingAccount, action.billingAccount));
      expect(generator.next(response).value).toEqual(put({ type: types.CREATE_BILLING_ACCOUNT_SUCCESS, data: response }));
    });

    it('can handle exception', () => {
      const action = {
        type: 'CREATE_BILLING_ACCOUNT',
        billingAccount: { baid: '3402000654', customerId: '1020004255', billCycle: '25', nextBillCycle: '' },
      };
      const generator = createBillingAccount(action);
      expect(generator.next(action.billingAccount).value).toEqual(call(saveBillingAccount, action.billingAccount));
      expect(generator.throw('error').value).toEqual(put({ type: types.CREATE_BILLING_ACCOUNT_FAILED, error: 'error' }));
    });
  });
  describe('Update billing account saga', () => {
    it('can update billing account successfully', () => {
      const action = {
        type: 'UPDATE_BILLING_ACCOUNT',
        baid: '3402000654',
        billingAccount: { billCycle: '25', nextBillCycle: '3' },
      };
      const response = { baid: '3402000654', customerId: '1020004255', billCycle: 25, nextBillCycle: 3, subscribers: [], customAttributes: {} };
      const generator = updateBillingAccount(action);

      expect(generator.next(action.billingAccount).value).toEqual(call(patchBillingAccount, action.baid, action.billingAccount));
      expect(generator.next(response).value).toEqual(put({ type: types.UPDATE_BILLING_ACCOUNT_SUCCESS, data: response }));
    });

    it('can handle exception', () => {
      const action = {
        type: 'UPDATE_BILLING_ACCOUNT',
        baid: '3402000654',
        billingAccount: { billCycle: '25', nextBillCycle: '3' },
      };
      const generator = updateBillingAccount(action);
      expect(generator.next(action.billingAccount).value).toEqual(call(patchBillingAccount, action.baid, action.billingAccount));
      expect(generator.throw('error').value).toEqual(put({ type: types.UPDATE_BILLING_ACCOUNT_FAILED, error: 'error' }));
    });
  });

  describe('Remove billing account saga', () => {
    it('can remove billing account successfully', () => {
      const action = {
        type: 'DELETE_BILLING_ACCOUNT',
        baid: '3402000425',
      };
      const generator = removeBillingAccount(action);
      expect(generator.next(action.baid).value).toEqual(call(deleteBillingAccount, action.baid));
      expect(generator.next().value).toEqual(put({ type: types.DELETE_BILLING_ACCOUNT_SUCCESS }));
    });

    it('can handle exception', () => {
      const action = {
        type: 'DELETE_BILLING_ACCOUNT',
        baid: '3402000425',
      };
      const generator = removeBillingAccount(action);
      expect(generator.next(action.baid).value).toEqual(call(deleteBillingAccount, action.baid));
      expect(generator.throw('error').value).toEqual(put({ type: types.DELETE_BILLING_ACCOUNT_FAILED, error: 'error' }));
    });
  });

  describe('Billing Account API Test', () => {
    beforeEach(() => {
      moxios.install();
    });
    it('can fetch billing account', (done) => {
      const baid = '3402000654';
      const onFulfilled = sinon.spy();

      moxios.stubRequest(`${ENDPOINTS.BILLING_ACCOUNT.GET.URL}${baid}`, {
        status: 200,
        response: { baid: '3402000654', customerId: '1020004255', billCycle: 25, nextBillCycle: 3, subscribers: [], customAttributes: {} },
      });
      axios.get(`${ENDPOINTS.BILLING_ACCOUNT.GET.URL}${baid}`).then(onFulfilled);
      moxios.wait(() => {
        expect(onFulfilled.called).toEqual(true);
        expect(onFulfilled.getCall(0).args[0].data.baid).toEqual('3402000654');
        done();
      });
    });
    it('should create billing account', (done) => {
      const onFulfilled = sinon.spy();
      const billingAccount = { baid: '3402000654', customerId: '1020004255', billCycle: '25', nextBillCycle: '' };
      moxios.stubRequest(`${ENDPOINTS.BILLING_ACCOUNT.POST.URL}`, {
        status: 200,
        response: { baid: '3402000654', customerId: '1020004255', billCycle: 25, nextBillCycle: 0, subscribers: [], customAttributes: {} },
      });
      axios.post(`${ENDPOINTS.BILLING_ACCOUNT.POST.URL}`, billingAccount).then(onFulfilled);
      moxios.wait(() => {
        expect(onFulfilled.called).toEqual(true);
        expect(onFulfilled.getCall(0).args[0].data.baid).toEqual('3402000654');
        done();
      });
    });
    it('should update billing account', (done) => {
      const onFulfilled = sinon.spy();
      const baid = '3402000654';
      const billingAccount = { billCycle: '25', nextBillCycle: '3' };
      moxios.stubRequest(`${ENDPOINTS.BILLING_ACCOUNT.PATCH.URL}`, {
        status: 200,
        response: { baid: '3402000654', customerId: '1020004255', billCycle: 25, nextBillCycle: 3, subscribers: [], customAttributes: {} },
      });
      axios.post(`${ENDPOINTS.BILLING_ACCOUNT.PATCH.URL}`, billingAccount).then(onFulfilled);
      moxios.wait(() => {
        expect(onFulfilled.called).toEqual(true);
        expect(onFulfilled.getCall(0).args[0].data.baid).toEqual('3402000654');
        done();
      });
    });
    afterEach(() => {
      moxios.uninstall();
    });
  });
});
