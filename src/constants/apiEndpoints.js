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
    DELETE: {
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
    DELETE: {
      URL: 'customers/',
    },
  },
  BILLING_ACCOUNT: {
    GET: {
      URL: 'billingaccounts/',
    },
    POST: {
      URL: 'billingaccounts',
    },
    PATCH: {
      URL: 'billingaccounts/',
    },
    DELETE: {
      URL: 'billingaccounts/',
    },
  },
  FUNDS: {
    RECHARGE_TYPE: {
      GET: {
        URL: 'static/rechargeTypes.json',
      },
    },
    TOPUP_PROFILE: {
      GET: {
        URL: 'commercialoffers/',
      },
    },
    ADJUSTMENT: {
      GET: {
        URL: 'adjustmentreasons/',
      },
    },
    FEE_RATING_RULE: {
      GET: {
        URL: 'adhoccharges/',
      },
    },
    PLUS_PACKS: {
      GET: {
        URL: 'commercialoffers/',
      },
    },
    COMMERCIAL_OFFER: {
      GET: {
        URL: 'commercialoffers/',
      },
    },
  },
  SUBSCRIPTIONS: {
    GET: {
      URL: 'subscribers/',
    },
    POST: {
      URL: 'subscribers/',
    },
    DELETE: {
      URL: 'subscribers/',
    },
  },
};
