import * as types from 'actions/actionTypes';

export default function fundsReducer(state = { }, action = null) {
  switch (action.type) {
    case types.GET_RECHARGE_TYPES:
      return { ...state };
    case types.GET_RECHARGE_TYPES_SUCCESS:
      return { ...state, topupTypes: action.data };
    case types.GET_RECHARGE_TYPES_FAILED:
      return { ...state, error: action.error };
    case types.GET_RECHARGE_PROFILES:
      return { ...state };
    case types.GET_RECHARGE_PROFILES_SUCCESS:
      return { ...state, topupProfiles: action.data };
    case types.GET_RECHARGE_PROFILES_FAILED:
      return { ...state, error: action.error };
    case types.GET_ADJUSTMENT_REASONS:
      return { ...state };
    case types.GET_ADJUSTMENT_REASONS_SUCCESS:
      return { ...state, adjustmentReasons: action.data };
    case types.GET_ADJUSTMENT_REASONS_FAILED:
      return { ...state, error: action.error };
    case types.GET_FEE_RATING_RULE:
      return { ...state };
    case types.GET_FEE_RATING_RULE_SUCCESS:
      return { ...state, feeRatingRule: action.data };
    case types.GET_FEE_RATING_RULE_FAILED:
      return { ...state, error: action.error };
    case types.GET_PLUS_PACKS:
      return { ...state };
    case types.GET_PLUS_PACKS_SUCCESS:
      return { ...state, plusPacks: action.data };
    case types.GET_PLUS_PACKS_FAILED:
      return { ...state, error: action.error };
    case types.GET_COMMERCIAL_OFFERS:
      return { ...state };
    case types.GET_COMMERCIAL_OFFERS_SUCCESS:
      return { ...state, commercialOffers: action.data };
    case types.GET_COMMERCIAL_OFFERS_FAILED:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
