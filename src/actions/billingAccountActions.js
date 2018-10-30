import * as types from './actionTypes';

export function getBillingAccount(baid) {
  return { type: types.GET_BILLING_ACCOUNT, baid };
}

export function createBillingAccount(billingAccount) {
  return { type: types.CREATE_BILLING_ACCOUNT, billingAccount };
}

export function updateBillingAccount(billingAccount, baid) {
  return { type: types.UPDATE_BILLING_ACCOUNT, billingAccount, baid };
}

export function removeBillingAccount(baid) {
  return { type: types.DELETE_BILLING_ACCOUNT, baid };
}
