import { call, put } from 'redux-saga/effects';
import { fetchTopupProfiles,
  fetchTopupTypes,
  getRechargeProfiles,
  getRechargeTypes,
  getAdjustmentReasons,
  fetchAdjustmentReasons,
  getFeeRatingRule,
  fetchAdhocCharges,
  getPlusPacks,
  fetchPlusPacks,
  getCommercialOffers,
  fetchCommercialOffers } from './fundsSaga';
import * as types from '../actions/actionTypes';

describe('Testing FUNDS Saga', () => {
  describe('Fetch Topup Profiles saga', () => {
    it('can fetch top up profiles successfully', () => {
      const action = { type: 'GET_RECHARGE_PROFILES', commercialOffer: '3GPPCAP' };
      const response = [{ name: 'Failed Recharge' }, { name: 'Compensation' }, { name: 'Credit Expiry Extension' }];
      const generator = getRechargeProfiles(action);

      expect(generator.next(action.commercialOffer).value).toEqual(call(fetchTopupProfiles, action.commercialOffer));
      expect(generator.next(response).value).toEqual(put({ type: types.GET_RECHARGE_PROFILES_SUCCESS, data: response }));
    });
    it('can handle exception', () => {
      const action = { type: 'GET_RECHARGE_PROFILES', commercialOffer: '3GPPCAP' };
      const generator = getRechargeProfiles(action);

      expect(generator.next(action.commercialOffer).value).toEqual(call(fetchTopupProfiles, action.commercialOffer));
      expect(generator.throw('error').value).toEqual(put({ type: types.GET_RECHARGE_PROFILES_FAILED, error: 'error' }));
    });
  });
  describe('Fetch Topup types saga', () => {
    it('can fetch top up types successfully', () => {
      const action = { type: 'GET_RECHARGE_TYPES' };
      const response = [{ topupProfileName: 'Topup-ALL-005', displayName: 'Topup-ALL-005', topupType: 'Generic Recharge' }];
      const generator = getRechargeTypes(action);

      expect(generator.next().value).toEqual(call(fetchTopupTypes));
      expect(generator.next(response).value).toEqual(put({ type: types.GET_RECHARGE_TYPES_SUCCESS, data: response }));
    });
    it('can handle exception', () => {
      const action = { type: 'GET_RECHARGE_TYPES' };
      const generator = getRechargeTypes(action);

      expect(generator.next().value).toEqual(call(fetchTopupTypes));
      expect(generator.throw('error').value).toEqual(put({ type: types.GET_RECHARGE_TYPES_FAILED, error: 'error' }));
    });
  });
  describe('Fetch Adjustment Reasons saga', () => {
    it('can fetch adjustment reasons successfully', () => {
      const action = { type: 'GET_ADJUSTMENT_REASONS' };
      const response = [{ name: 'Prepaid to Postpaid Transfer', category: 'Forfeit Credit', id: 'Prepaid to Postpaid Transfer', glCenter: null }];
      const generator = getAdjustmentReasons(action);

      expect(generator.next().value).toEqual(call(fetchAdjustmentReasons));
      expect(generator.next(response).value).toEqual(put({ type: types.GET_ADJUSTMENT_REASONS_SUCCESS, data: response }));
    });
    it('can handle exception', () => {
      const action = { type: 'GET_ADJUSTMENT_REASONS' };
      const generator = getAdjustmentReasons(action);

      expect(generator.next().value).toEqual(call(fetchAdjustmentReasons));
      expect(generator.throw('error').value).toEqual(put({ type: types.GET_ADJUSTMENT_REASONS_FAILED, error: 'error' }));
    });
  });
  describe('Fetch Fee rating rule saga', () => {
    it('can fetch fee rating rule successfully', () => {
      const action = { type: 'GET_FEE_RATING_RULE' };
      const response = [{ chargeName: 'Handset_Unlock_25.00', siebelProductId: null, displayName: 'Handset_Unlock_25.00', chargeAmount: 25.0, chargeReason: 'Network Unlock Fee', foH: true, brands: ['Boost', 'Telstra'] }];
      const generator = getFeeRatingRule(action);

      expect(generator.next().value).toEqual(call(fetchAdhocCharges));
      expect(generator.next(response).value).toEqual(put({ type: types.GET_FEE_RATING_RULE_SUCCESS, data: response }));
    });
    it('can handle exception', () => {
      const action = { type: 'GET_FEE_RATING_RULE' };
      const generator = getFeeRatingRule(action);

      expect(generator.next().value).toEqual(call(fetchAdhocCharges));
      expect(generator.throw('error').value).toEqual(put({ type: types.GET_FEE_RATING_RULE_FAILED, error: 'error' }));
    });
  });
  describe('Fetch plus packs saga', () => {
    it('can fetch plus packs successfully', () => {
      const action = { type: 'GET_PLUS_PACKS', commercialOffer: '3GPPCAP' };
      const response = [{ pluspackName: 'BROWSEPLUS10', siebelProductId: 'DABZ0000195', displayName: 'BROWSEPLUS10' }];
      const generator = getPlusPacks(action);

      expect(generator.next(action).value).toEqual(call(fetchPlusPacks, action.commercialOffer));
      expect(generator.next(response).value).toEqual(put({ type: types.GET_PLUS_PACKS_SUCCESS, data: response }));
    });
    it('can handle exception', () => {
      const action = { type: 'GET_PLUS_PACKS', commercialOffer: '3GPPCAP' };
      const generator = getPlusPacks(action);

      expect(generator.next(action).value).toEqual(call(fetchPlusPacks, action.commercialOffer));
      expect(generator.throw('error').value).toEqual(put({ type: types.GET_PLUS_PACKS_FAILED, error: 'error' }));
    });
  });
  describe('Fetch Commercial Offers saga', () => {
    it('can fetch commercial offers successfully', () => {
      const action = { type: 'GET_COMMERCIAL_OFFERS', commercialOffer: '3GPPCAP' };
      const response = [{ id: '3GONTELS', name: 'Text and Data (1c Text +)' }];
      const generator = getCommercialOffers(action);

      expect(generator.next(action).value).toEqual(call(fetchCommercialOffers, action.commercialOffer));
      expect(generator.next(response).value).toEqual(put({ type: types.GET_COMMERCIAL_OFFERS_SUCCESS, data: response }));
    });
    it('can handle exception', () => {
      const action = { type: 'GET_COMMERCIAL_OFFERS', commercialOffer: '3GPPCAP' };
      const generator = getCommercialOffers(action);

      expect(generator.next(action).value).toEqual(call(fetchCommercialOffers, action.commercialOffer));
      expect(generator.throw('error').value).toEqual(put({ type: types.GET_COMMERCIAL_OFFERS_FAILED, error: 'error' }));
    });
  });
});
