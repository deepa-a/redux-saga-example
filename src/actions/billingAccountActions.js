import * as types from './actionTypes';

export function getBillingAccount() {
  return { type: types.GET_BILLING_ACCOUNT };
}

export function createBillingAccount(billingAccount) {
  return { type: types.CREATE_BILLING_ACCOUNT, billingAccount };
}

export function updateBillingAccount(billingAccount) {
  return { type: types.UPDATE_BILLING_ACCOUNT, billingAccount };
}
