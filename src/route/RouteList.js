import React from 'react';
import Home from 'components/Home';
import SubscriberDetails from 'components/SubscriberDetails';
import RouteSchema from './RouteSchema';

/* TODO delete this component when all the components are replaced */
class InterimComponent extends React.Component {
  render() {
    return (<h1>This is a temporay screen.<br /> Replace me with the actual component</h1>);
  }
}

/**
 * Define all routes
 */
/* Default routes */
const home = new RouteSchema('/', Home, 'Home', null, true);
const voucher = new RouteSchema('/voucher', InterimComponent, 'Voucher', null);
const manageCustomer = new RouteSchema('/management/customer', InterimComponent, 'Manage Customer', null);
const billingAccount = new RouteSchema('/management/billing-account', InterimComponent, 'Manage Billing Account', null);
const manageSubscriber = new RouteSchema('/management/subscriber', InterimComponent, 'Manage Subscriber', null);
const sharedArrangements = new RouteSchema('/shared-arrangements', InterimComponent, 'Shared Arrangements', null);
const ttiWeb = new RouteSchema('/TTI_WEB', InterimComponent, 'VMS Management GUI', null);

/* Funds routes */
const fundsRecharge = new RouteSchema('/funds/recharge', InterimComponent, 'Recharge', null);
const fundsAdjustments = new RouteSchema('/funds/adjustments', InterimComponent, 'Adjustments', null);
const fundsImmediateChanging = new RouteSchema('/funds/immediate-changing', InterimComponent, 'Immediate Charging', null);
const fundsPurchaseBundle = new RouteSchema('/funds/purchase-bundle', InterimComponent, 'Purchase Bundle', null);
const fundsCommercialOffer = new RouteSchema('/funds/commercial-offer', InterimComponent, 'Commercial Offer', null);
const fundsRedeemVoucher = new RouteSchema('/funds/redeem-voucher', InterimComponent, 'Redeem Voucher', null);

/* Subscriber routes */
const subscriberDetails = new RouteSchema('/subscriber-details', SubscriberDetails, 'Subscriber Details', null);
const history = new RouteSchema('/history', InterimComponent, 'History', null);
const bundles = new RouteSchema('/bundles', InterimComponent, 'Bundles', null);
const familyAndFriend = new RouteSchema('/family-and-friend', InterimComponent, 'Family & Friends', null);
const lowCreditManagement = new RouteSchema('/low-credit-management', InterimComponent, 'Low Credit Management', null);
const notifications = new RouteSchema('/notifications', InterimComponent, 'Notifications', null);
const subscriptions = new RouteSchema('/subscriptions', InterimComponent, 'Subscriptions', null);
const spendLimits = new RouteSchema('/spend-limits', InterimComponent, 'Spend Limits', null);
const sessions = new RouteSchema('/sessions', InterimComponent, 'Sessions', null);

/**
 * Get default routes
 */
export const homeRoute = [
  home,
];

export const otherRoutes = [
  voucher,
  manageCustomer,
  billingAccount,
  manageSubscriber,
  sharedArrangements,
  ttiWeb,
];

/**
 * Get Funds routes
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
