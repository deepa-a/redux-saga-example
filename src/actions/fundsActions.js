import * as types from './actionTypes';

export function getRechargeTypes() {
  return { type: types.GET_RECHARGE_TYPES };
}

export function getRechargeProfiles(commercialOffer) {
  return { type: types.GET_RECHARGE_PROFILES, commercialOffer };
}

export function getAdjustmentReasons() {
  return { type: types.GET_ADJUSTMENT_REASONS };
}

export function getFeeRatingRule() {
  return { type: types.GET_FEE_RATING_RULE };
}

export function getPlusPacks(commercialOffer) {
  return { type: types.GET_PLUS_PACKS, commercialOffer };
}

export function getCommercialOffers(commercialOffer) {
  return { type: types.GET_COMMERCIAL_OFFERS, commercialOffer };
}
