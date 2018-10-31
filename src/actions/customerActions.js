import * as types from './actionTypes';

export function getCustomer(customerId) {
  return { type: types.GET_CUSTOMER, customerId };
}

export function createCustomer(customer) {
  return { type: types.CREATE_CUSTOMER, customer };
}

export function updateCustomer(customer, customerId) {
  return { type: types.UPDATE_CUSTOMER, customer, customerId };
}

export function removeCustomer(customerId) {
  return { type: types.DELETE_CUSTOMER, customerId };
}
