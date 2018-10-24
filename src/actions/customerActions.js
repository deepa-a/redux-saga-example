import * as types from './actionTypes';

export function getCustomer() {
  return { type: types.GET_CUSTOMER };
}

export function createCustomer(customer) {
  return { type: types.CREATE_CUSTOMER, customer };
}

export function updateCustomer(customer) {
  return { type: types.UPDATE_CUSTOMER, customer };
}
