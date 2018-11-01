import { call, put } from 'redux-saga/effects';
import { getSubscriptions,
  fetchSubscriptions,
  addSubscription,
  postSubscription,
  deleteSubscription,
  removeSubscription } from './subscriptionSaga';
import types from '../actions/subscriptionActionTypes';

describe('Testing Subscription Saga', () => {
  describe('Get subscriptions saga', () => {
    it('can fetch subscriptions successfully', () => {
      const action = {
        msisdn: '61411111111',
        type: 'GET_SUBSCRIPTIONS',
      };
      const response = {};
      const generator = getSubscriptions(action);
      expect(generator.next(action.msisdn).value).toEqual(call(fetchSubscriptions, action.msisdn));
      expect(generator.next(response).value).toEqual(put({ type: types.GET_SUBSCRIPTIONS_SUCCESS, data: response }));
    });
    it('can handle exception', () => {
      const action = {
        msisdn: '61411111111',
        type: 'GET_SUBSCRIPTIONS',
      };
      const generator = getSubscriptions(action);
      expect(generator.next(action.msisdn).value).toEqual(call(fetchSubscriptions, action.msisdn));
      expect(generator.throw('error').value).toEqual(put({ type: types.GET_SUBSCRIPTIONS_FAILED, error: 'error' }));
    });
  });

  describe('Add subscription saga', () => {
    it('can add subscription successfully', () => {
      const action = {
        msisdn: '61411111111',
        type: 'ADD_SUBSCRIPTION',
      };
      const response = {};
      const generator = addSubscription(action);
      expect(generator.next(action.msisdn).value).toEqual(call(postSubscription, action.msisdn));
      expect(generator.next(response).value).toEqual(put({ type: types.ADD_SUBSCRIPTION_SUCCESS, data: response }));
    });
    it('can handle exception', () => {
      const action = {
        msisdn: '61411111111',
        type: 'ADD_SUBSCRIPTION',
      };
      const generator = addSubscription(action);
      expect(generator.next(action.msisdn).value).toEqual(call(postSubscription, action.msisdn));
      expect(generator.throw('error').value).toEqual(put({ type: types.ADD_SUBSCRIPTION_FAILED, error: 'error' }));
    });
  });

  describe('Delete subscription saga', () => {
    it('can delete subscription successfully', () => {
      const action = {
        msisdn: '61411111111',
        type: 'DELETE_SUBSCRIPTION',
      };
      const response = {};
      const generator = getSubscriptions(action);
      expect(generator.next(action.msisdn).value).toEqual(call(fetchSubscriptions, action.msisdn));
      expect(generator.next(response).value).toEqual(put({ type: types.DELETE_SUBSCRIPTIONS_SUCCESS, data: response }));
    });
    it('can handle exception', () => {
      const action = {
        msisdn: '61411111111',
        type: 'DELETE_SUBSCRIPTION',
      };
      const generator = removeSubscription(action);
      expect(generator.next(action.msisdn).value).toEqual(call(deleteSubscription, action.msisdn));
      expect(generator.throw('error').value).toEqual(put({ type: types.DELETE_SUBSCRIPTIONS_FAILED, error: 'error' }));
    });
  });
});
