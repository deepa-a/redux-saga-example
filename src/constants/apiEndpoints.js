export const API_BASE_URL = `${process.env.API_BASE_URL}/ocsia-selfcare/prepaid/rest/v1/`;

export const ENDPOINTS = {
  SUBSCRIBER: {
    GET: {
      URL: 'subscribers/',
    },
    POST: {
      URL: 'subscribers',
    },
    PATCH: {
      URL: 'subscribers/',
    },
  },
  CUSTOMER: {
    GET: {
      URL: 'customers/',
    },
    POST: {
      URL: 'customers',
    },
    PATCH: {
      URL: 'customers/',
    },
  },
  BILLING_ACCOUNT: {
    GET: {
      URL: 'billingaccounts/'
    },
    POST: {
      URL: 'billingaccounts',
    },
    PATCH: {
      URL: 'billingaccounts/',
    },
  },
};
