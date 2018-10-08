import React from 'react';
import RouteSchema from './RouteSchema';

/* TODO delete this component when all the components are replaced */
class InterimComponent extends React.Component {
  render() {
    return (<h1>This is a temporay screen.<br/> Replace me with the actual component</h1>);
  }
}

/**
  * Define all routes
  */
/* Main routes */
const voucher = new RouteSchema('/voucher', InterimComponent, null, null);
const manageCustomer = new RouteSchema('/management/customer', InterimComponent, null, null);
const billingAccount = new RouteSchema('/management/billing-account', InterimComponent, null, null);
const manageSubscriber = new RouteSchema('/management/subscriber', InterimComponent, null, null);
const sharedArrangements = new RouteSchema('/shared-arrangements', InterimComponent, null, null);
const ttiWeb = new RouteSchema('/TTI_WEB', InterimComponent, null, null);

/* Funds routes */
const fundsRecharge = new RouteSchema('/funds/recharge', InterimComponent, null, null);
const fundsAdjustments = new RouteSchema('/funds/adjustments', InterimComponent, null, null);
const fundsImmediateChanging = new RouteSchema('/funds/immediate-changing', InterimComponent, null, null);
const fundsPurchaseBundle = new RouteSchema('/funds/purchase-bundle', InterimComponent, null, null);
const fundsCommercialOffer = new RouteSchema('/funds/commercial-offer', InterimComponent, null, null);
const fundsRedeemVoucher = new RouteSchema('/funds/redeem-voucher', InterimComponent, null, null);

/* Subscriber routes */
const subscriberDetails = new RouteSchema('/subscriber-details', InterimComponent, null, null);
const history = new RouteSchema('/history', InterimComponent, null, null);
const bundles = new RouteSchema('/bundles', InterimComponent, null, null);
const familyAndFriend = new RouteSchema('/family-and-friend', InterimComponent, null, null);
const lowCreditManagement = new RouteSchema('/low-credit-management', InterimComponent, null, null);
const notifications = new RouteSchema('/notifications', InterimComponent, null, null);
const subscriptions = new RouteSchema('/subscriptions', InterimComponent, null, null);
const spendLimits = new RouteSchema('/spend-limits', InterimComponent, null, null);
const sessions = new RouteSchema('/sessions', InterimComponent, null, null);

/**
 * Get default route list
 */
export const mainRoutes = [
  voucher,
  manageCustomer,
  billingAccount,
  manageSubscriber,
  sharedArrangements,
  ttiWeb,
];

/**
 * Get route list for Funds functionalities
 */
export const fundsRoutes = [
  fundsRecharge,
  fundsAdjustments,
  fundsImmediateChanging,
  fundsPurchaseBundle,
  fundsCommercialOffer,
  fundsRedeemVoucher,
];

export const subscriberRoutes = [
  subscriberDetails,
  history,
  bundles,
  familyAndFriend,
  lowCreditManagement,
  notifications,
  subscriptions,
  spendLimits,
  sessions,
];
