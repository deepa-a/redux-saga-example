import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import { call, put } from 'redux-saga/effects';
import { fetchCustomer,
  saveCustomer,
  patchCustomer,
  fetchCustomerDetails,
  removeCustomer,
  deleteCustomer,
  createCustomer,
  updateCustomer } from './customerSaga';
import * as types from '../actions/actionTypes';
import { ENDPOINTS } from '../constants/apiEndpoints';

describe('Testing Customer Saga', () => {
  describe('Fetch customer details saga', () => {
    it('can fetch customer details successfully', () => {
      const action = {
        customerId: '1020004255',
        type: 'GET_CUSTOMER',
      };
      const response = { accounts: ['3402000425', '3402000426'], customerId: '1020004255', status: 'ACTIVE', spaGroups: [], birthday: null, postCode: '3000', rou: 'BCC', customAttributes: {}, glCode: null };
      const generator = fetchCustomerDetails(action);

      expect(generator.next(action.customerId).value).toEqual(call(fetchCustomer, action.customerId));
      expect(generator.next(response).value).toEqual(put({ type: types.CUSTOMER_RECEIVED, data: response }));
    });

    it('can handle exception', () => {
      const action = {
        customerId: '1020004255',
        type: 'GET_CUSTOMER',
      };
      const generator = fetchCustomerDetails(action);
      expect(generator.next(action.customerId).value).toEqual(call(fetchCustomer, action.customerId));
      expect(generator.throw('error').value).toEqual(put({ type: types.CUSTOMER_REQUEST_FAILED, error: 'error' }));
    });
    it('can fetch customer details for subscriber successfully', () => {
      const action = {
        customerId: '1020004255',
        type: 'GET_SUB_CUSTOMER',
        flag: 'SUB',
      };

      const response = { accounts: ['3402000425', '3402000426'], customerId: '1020004255', status: 'ACTIVE', spaGroups: [], birthday: null, postCode: '3000', rou: 'BCC', customAttributes: {}, glCode: null };
      const generator = fetchCustomerDetails(action);

      expect(generator.next(action.customerId).value).toEqual(call(fetchCustomer, action.customerId));
      expect(generator.next(response).value).toEqual(put({ type: types.SUB_CUSTOMER_RECEIVED, data: response }));
    });
    it('can handle exception', () => {
      const action = {
        customerId: '1020004255',
        type: 'GET_SUB_CUSTOMER',
        flag: 'SUB',
      };
      const generator = fetchCustomerDetails(action);
      expect(generator.next(action.customerId).value).toEqual(call(fetchCustomer, action.customerId));
      expect(generator.throw('error').value).toEqual(put({ type: types.SUB_CUSTOMER_REQUEST_FAILED, error: 'error' }));
    });
  });

  describe('Save customer saga', () => {
    it('can create customer successfully', () => {
      const action = {
        type: 'CREATE_CUSTOMER',
        customer: { customerId: '1020004257', rou: 'BCC', postCode: '3023' },
      };
      const response = { accounts: [], customerId: '1020004257', status: null, spaGroups: [], birthday: null, postCode: '3023', rou: 'BCC', customAttributes: {}, glCode: null };
      const generator = createCustomer(action);

      expect(generator.next(action.customer).value).toEqual(call(saveCustomer, action.customer));
      expect(generator.next(response).value).toEqual(put({ type: types.CREATE_CUSTOMER_SUCCESS, data: response }));
    });

    it('can handle exception', () => {
      const action = {
        type: 'CREATE_CUSTOMER',
        customer: { customerId: '1020004257', rou: 'BCC', postCode: '3023' },
      };
      const generator = createCustomer(action);
      expect(generator.next(action.customer).value).toEqual(call(saveCustomer, action.customer));
      expect(generator.throw('error').value).toEqual(put({ type: types.CREATE_CUSTOMER_FAILED, error: 'error' }));
    });
  });

  describe('Update customer saga', () => {
    it('can update subscriber successfully', () => {
      const action = {
        type: 'UPDATE_CUSTOMER',
        customerId: '1020004257',
        customer: { postCode: '3000' },
      };
      const response = { accounts: [], customerId: '1020004257', status: 'ACTIVE', spaGroups: [], birthday: null, postCode: '3000', rou: 'BCC', customAttributes: {}, glCode: null };
      const generator = updateCustomer(action);

      expect(generator.next(action.customer).value).toEqual(call(patchCustomer, action.customerId, action.customer));
      expect(generator.next(response).value).toEqual(put({ type: types.UPDATE_CUSTOMER_SUCCESS, data: response }));
    });

    it('can handle exception', () => {
      const action = {
        type: 'UPDATE_CUSTOMER',
        customerId: '1020004257',
        customer: { postCode: '3000' },
      };
      const generator = updateCustomer(action);
      expect(generator.next(action.customer).value).toEqual(call(patchCustomer, action.customerId, action.customer));
      expect(generator.throw('error').value).toEqual(put({ type: types.UPDATE_CUSTOMER_FAILED, error: 'error' }));
    });
  });

  describe('Remove customer saga', () => {
    it('can remove customer successfully', () => {
      const action = {
        type: 'DELETE_CUSTOMER',
        customerId: '1020004290',
      };
      const generator = removeCustomer(action);
      expect(generator.next(action.customerId).value).toEqual(call(deleteCustomer, action.customerId));
      expect(generator.next().value).toEqual(put({ type: types.DELETE_CUSTOMER_SUCCESS }));
    });

    it('can handle exception', () => {
      const action = {
        type: 'DELETE_CUSTOMER',
        customerId: '1020004290',
      };
      const generator = removeCustomer(action);
      expect(generator.next(action.customerId).value).toEqual(call(deleteCustomer, action.customerId));
      expect(generator.throw('error').value).toEqual(put({ type: types.DELETE_CUSTOMER_FAILED, error: 'error' }));
    });
  });

  describe('Customer API Test', () => {
    beforeEach(() => {
      moxios.install();
    });
    it('can fetch customer', (done) => {
      const customerId = '1020004257';
      const onFulfilled = sinon.spy();

      moxios.stubRequest(`${ENDPOINTS.CUSTOMER.GET.URL}${customerId}`, {
        status: 200,
        response: { accounts: [], customerId: '1020004257', status: 'ACTIVE', spaGroups: [], birthday: null, postCode: '3000', rou: 'BCC', customAttributes: {}, glCode: null },
      });
      axios.get(`${ENDPOINTS.CUSTOMER.GET.URL}${customerId}`).then(onFulfilled);
      moxios.wait(() => {
        expect(onFulfilled.called).toEqual(true);
        expect(onFulfilled.getCall(0).args[0].data.customerId).toEqual('1020004257');
        done();
      });
    });
    it('should create customer', (done) => {
      const onFulfilled = sinon.spy();
      const customer = { customerId: '1020004257', rou: 'BCC', postCode: '3023' };
      moxios.stubRequest(`${ENDPOINTS.CUSTOMER.POST.URL}`, {
        status: 200,
        response: { accounts: [], customerId: '1020004257', status: null, spaGroups: [], birthday: null, postCode: '3023', rou: 'BCC', customAttributes: {}, glCode: null },
      });
      axios.post(`${ENDPOINTS.CUSTOMER.POST.URL}`, customer).then(onFulfilled);
      moxios.wait(() => {
        expect(onFulfilled.called).toEqual(true);
        expect(onFulfilled.getCall(0).args[0].data.customerId).toEqual('1020004257');
        done();
      });
    });
    it('should update customer', (done) => {
      const onFulfilled = sinon.spy();
      const customerId = '1020004257';
      const customer = { postCode: '3000' };
      moxios.stubRequest(`${ENDPOINTS.CUSTOMER.PATCH.URL}`, {
        status: 200,
        response: { accounts: [], customerId: '1020004257', status: 'ACTIVE', spaGroups: [], birthday: null, postCode: '3000', rou: 'BCC', customAttributes: {}, glCode: null },
      });
      axios.post(`${ENDPOINTS.CUSTOMER.PATCH.URL}`, customer).then(onFulfilled);
      moxios.wait(() => {
        expect(onFulfilled.called).toEqual(true);
        expect(onFulfilled.getCall(0).args[0].data.customerId).toEqual('1020004257');
        expect(onFulfilled.getCall(0).args[0].data.postCode).toEqual('3000');
        done();
      });
    });
    afterEach(() => {
      moxios.uninstall();
    });
  });
});
