import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from '../utils/axios';
import { ENDPOINTS } from '../constants/apiEndpoints';
import * as types from '../actions/actionTypes';

export function fetchTopupTypes() {
  return axios.get('http://127.0.0.1:5060?file=rechargeTypes').then(response => response.data);
}

export function fetchTopupProfiles(commercialOffer) {
  return axios.get(`${ENDPOINTS.FUNDS.TOPUP_PROFILE.GET.URL}${commercialOffer}/topup_profiles`).then(response => response.data);
}

export function fetchAdjustmentReasons() {
  return axios.get(`${ENDPOINTS.FUNDS.ADJUSTMENT.GET.URL}`).then(response => response.data);
}

export function fetchAdhocCharges() {
  return axios.get(`${ENDPOINTS.FUNDS.FEE_RATING_RULE.GET.URL}`).then(response => response.data);
}

export function fetchCommercialOffers(commercialOffer) {
  return axios.get(`${ENDPOINTS.FUNDS.COMMERCIAL_OFFER.GET.URL}${commercialOffer}/commercialoffers`).then(response => response.data);
}

export function fetchPlusPacks(commercialOffer) {
  return axios.get(`${ENDPOINTS.FUNDS.PLUS_PACKS.GET.URL}${commercialOffer}/pluspacks`).then(response => response.data);
}

export function* getRechargeTypes(action) {
  try {
    const rechargeTypes = yield call(fetchTopupTypes);
    yield put({ type: types.GET_RECHARGE_TYPES_SUCCESS, data: rechargeTypes });
  } catch (error) {
    yield put({ type: types.GET_RECHARGE_TYPES_FAILED, error });
  }
}

export function* getRechargeProfiles(action) {
  try {
    const { commercialOffer } = action;
    const rechargeProfiles = yield call(fetchTopupProfiles, commercialOffer);
    yield put({ type: types.GET_RECHARGE_PROFILES_SUCCESS, data: rechargeProfiles });
  } catch (error) {
    yield put({ type: types.GET_RECHARGE_PROFILES_FAILED, error });
  }
}

export function* getAdjustmentReasons(action) {
  try {
    const adjustmentReasons = yield call(fetchAdjustmentReasons);
    yield put({ type: types.GET_ADJUSTMENT_REASONS_SUCCESS, data: adjustmentReasons });
  } catch (error) {
    yield put({ type: types.GET_ADJUSTMENT_REASONS_FAILED, error });
  }
}

export function* getFeeRatingRule(action) {
  try {
    const feeRatingRule = yield call(fetchAdhocCharges);
    yield put({ type: types.GET_FEE_RATING_RULE_SUCCESS, data: feeRatingRule });
  } catch (error) {
    yield put({ type: types.GET_FEE_RATING_RULE_FAILED, error });
  }
}

export function* getPlusPacks(action) {
  try {
    const { commercialOffer } = action;
    const plusPacks = yield call(fetchPlusPacks, commercialOffer);
    yield put({ type: types.GET_PLUS_PACKS_SUCCESS, data: plusPacks });
  } catch (error) {
    yield put({ type: types.GET_PLUS_PACKS_FAILED, error });
  }
}

export function* getCommercialOffers(action) {
  try {
    const { commercialOffer } = action;
    const commercialOffers = yield call(fetchCommercialOffers, commercialOffer);
    yield put({ type: types.GET_COMMERCIAL_OFFERS_SUCCESS, data: commercialOffers });
  } catch (error) {
    yield put({ type: types.GET_COMMERCIAL_OFFERS_FAILED, error });
  }
}

export function* fundsSaga() {
  yield all([
    takeLatest(types.GET_RECHARGE_TYPES, getRechargeTypes),
    takeLatest(types.GET_RECHARGE_PROFILES, getRechargeProfiles),
    takeLatest(types.GET_ADJUSTMENT_REASONS, getAdjustmentReasons),
    takeLatest(types.GET_FEE_RATING_RULE, getFeeRatingRule),
    takeLatest(types.GET_PLUS_PACKS, getPlusPacks),
    takeLatest(types.GET_COMMERCIAL_OFFERS, getCommercialOffers),
  ]);
}
