import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import { call, put, take } from 'redux-saga/effects';
import {
    fetchCustomer,
    saveCustomer,
    patchCustomer,
    fetchCustomerDetails,
    createCustomer,
    updateCustomer
} from '../sagas/customerSaga';
import * as types from '../actions/actionTypes';
import {  ENDPOINTS } from '../constants/apiEndpoints';

describe('Testing Customer Saga', () => {
    describe('Fetch customer details saga', () => {
        it('can fetch customer details successfully', () => {
            const action = {
                customerId: "1020004255",
                type: "GET_CUSTOMER"
            };
            const response = {"accounts":["3402000425","3402000426"],"customerId":"1020004255","status":"ACTIVE","spaGroups":[],"birthday":null,"postCode":"3000","rou":"BCC","customAttributes":{},"glCode":null};
            const generator = fetchCustomerDetails(action);

            expect(generator.next(action.customerId).value).toEqual(call(fetchCustomer, action.customerId));
            expect(generator.next(response).value).toEqual(put({ type: types.CUSTOMER_RECEIVED, data: response }))

        });

        it('can handle exception', () => {
            const action = {
                customerId: "1020004255",
                type: "GET_CUSTOMER"
            };
            const generator = fetchCustomerDetails(action);
            expect(generator.next(action.customerId).value).toEqual(call(fetchCustomer, action.customerId));
            expect(generator.throw('error').value).toEqual(put({ type: types.CUSTOMER_REQUEST_FAILED, error: 'error' }));
        });
        it('can fetch customer details for subscriber successfully', () => {
            const action = {
                customerId: "1020004255",
                type: "GET_SUB_CUSTOMER",
                flag: "SUB",
            };

            const response = {"accounts":["3402000425","3402000426"],"customerId":"1020004255","status":"ACTIVE","spaGroups":[],"birthday":null,"postCode":"3000","rou":"BCC","customAttributes":{},"glCode":null};
            const generator = fetchCustomerDetails(action);

            expect(generator.next(action.customerId).value).toEqual(call(fetchCustomer, action.customerId));
            expect(generator.next(response).value).toEqual(put({ type: types.SUB_CUSTOMER_RECEIVED, data: response }))

        });
        it('can handle exception', () => {
            const action = {
                customerId: "1020004255",
                type: "GET_SUB_CUSTOMER",
                flag: "SUB",
            };
            const generator = fetchCustomerDetails(action);
            expect(generator.next(action.customerId).value).toEqual(call(fetchCustomer, action.customerId));
            expect(generator.throw('error').value).toEqual(put({ type: types.SUB_CUSTOMER_REQUEST_FAILED, error: 'error' }));
        })
    });

    describe('Save customer saga', () => {
        it('can create customer successfully', () => {
            const action = {
                type: "CREATE_CUSTOMER",
                customer: {"customerId":"1020004257","rou":"BCC","postCode":"3023"}
            };
            const response = {"accounts":[],"customerId":"1020004257","status":null,"spaGroups":[],"birthday":null,"postCode":"3023","rou":"BCC","customAttributes":{},"glCode":null}
            const generator = createCustomer(action);

            expect(generator.next(action.customer).value).toEqual(call(saveCustomer, action.customer));
            expect(generator.next(response).value).toEqual(put({ type: types.CREATE_CUSTOMER_SUCCESS, data: response }))

        });

        it('can handle exception', () => {
            const action = {
                type: "CREATE_CUSTOMER",
                customer: {"customerId":"1020004257","rou":"BCC","postCode":"3023"}
            };
            const generator = createCustomer(action);
            expect(generator.next(action.customer).value).toEqual(call(saveCustomer, action.customer));
            expect(generator.throw('error').value).toEqual(put({ type: types.CREATE_CUSTOMER_FAILED, error: 'error' }));
        })
    });

    describe('Update customer saga', () => {
        it('can update subscriber successfully', () => {
            const action = {
                type: "UPDATE_CUSTOMER",
                customerId: "1020004257",
                customer: {"postCode":"3000"},
            };
            const response = {"accounts":[],"customerId":"1020004257","status":"ACTIVE","spaGroups":[],"birthday":null,"postCode":"3000","rou":"BCC","customAttributes":{},"glCode":null};
            const generator = updateCustomer(action);

            expect(generator.next(action.customer).value).toEqual(call(patchCustomer, action.customerId, action.customer));
            expect(generator.next(response).value).toEqual(put({ type: types.UPDATE_CUSTOMER_SUCCESS, data: response }))

        });

        it('can handle exception', () => {
            const action = {
                type: "UPDATE_CUSTOMER",
                customerId: "1020004257",
                customer: {"postCode":"3000"},
            };
            const generator = updateCustomer(action);
            expect(generator.next(action.customer).value).toEqual(call(patchCustomer, action.customerId, action.customer));
            expect(generator.throw('error').value).toEqual(put({ type: types.UPDATE_CUSTOMER_FAILED, error: 'error' }));
        })
    });

    describe('Customer API Test', () => {
        beforeEach(() => {
            moxios.install();
        });
        it('can fetch customer api', (done) => {
            const customerId = '1020004257';
            let onFulfilled = sinon.spy();

            moxios.stubRequest(`${ENDPOINTS.CUSTOMER.GET.URL}${customerId}`, {
                status: 200,
                response: {"accounts":[],"customerId":"1020004257","status":"ACTIVE","spaGroups":[],"birthday":null,"postCode":"3000","rou":"BCC","customAttributes":{},"glCode":null}
            });
            axios.get(`${ENDPOINTS.CUSTOMER.GET.URL}${customerId}`).then(onFulfilled);
            moxios.wait(() => {
                expect(onFulfilled.called).toEqual(true);
                expect(onFulfilled.getCall(0).args[0].data.customerId).toEqual('1020004257');
                done();
            })
        });
        afterEach(() => {
            moxios.uninstall();
        });
    });
});