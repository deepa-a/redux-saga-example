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
const home = new RouteSchema('/', Home, 'Home', null, true, 'MOCCA_ADMIN');
const voucher = new RouteSchema('/voucher', InterimComponent, 'Voucher', null, false, 'MOCCA_ADMIN');
const manageCustomer = new RouteSchema('/management/customer', InterimComponent, 'Manage Customer', null, false, 'MOCCA_ADMIN');
const billingAccount = new RouteSchema('/management/billing-account', InterimComponent, 'Manage Billing Account', null, false, 'MOCCA_ADMIN');
const manageSubscriber = new RouteSchema('/management/subscriber', InterimComponent, 'Manage Subscriber', null, false, 'MOCCA_ADMIN');
const sharedArrangements = new RouteSchema('/shared-arrangements', InterimComponent, 'Shared Arrangements', null, false, 'MOCCA_ADMIN');
const ttiWeb = new RouteSchema('/TTI_WEB', InterimComponent, 'VMS Management GUI', null, false, 'MOCCA_ADMIN');

/* Funds routes */
const fundsRecharge = new RouteSchema('/funds/recharge', InterimComponent, 'Recharge', null, false, 'FOOBAR');
const fundsAdjustments = new RouteSchema('/funds/adjustments', InterimComponent, 'Adjustments', null, false, 'MOCCA_ADMIN');
const fundsImmediateChanging = new RouteSchema('/funds/immediate-changing', InterimComponent, 'Immediate Charging', null, false, 'MOCCA_ADMIN');
const fundsPurchaseBundle = new RouteSchema('/funds/purchase-bundle', InterimComponent, 'Purchase Bundle', null, false, 'MOCCA_ADMIN');
const fundsCommercialOffer = new RouteSchema('/funds/commercial-offer', InterimComponent, 'Commercial Offer', null, false, 'MOCCA_ADMIN');
const fundsRedeemVoucher = new RouteSchema('/funds/redeem-voucher', InterimComponent, 'Redeem Voucher', null, false, 'FOOBAR');

/* Subscriber routes */
const subscriberDetails = new RouteSchema('/subscriber-details', SubscriberDetails, 'Subscriber Details', null, false, 'FOOBAR');
const history = new RouteSchema('/history', InterimComponent, 'History', null, false, 'FOOBAR');
const bundles = new RouteSchema('/bundles', InterimComponent, 'Bundles', null, false, 'MOCCA_ADMIN');
const familyAndFriend = new RouteSchema('/family-and-friend', InterimComponent, 'Family & Friends', null, false, 'MOCCA_ADMIN');
const lowCreditManagement = new RouteSchema('/low-credit-management', InterimComponent, 'Low Credit Management', null, false, 'FOOBAR');
const notifications = new RouteSchema('/notifications', InterimComponent, 'Notifications', null, false, 'MOCCA_ADMIN');
const subscriptions = new RouteSchema('/subscriptions', InterimComponent, 'Subscriptions', null, false, 'MOCCA_ADMIN');
const spendLimits = new RouteSchema('/spend-limits', InterimComponent, 'Spend Limits', null, false, 'MOCCA_ADMIN');
const sessions = new RouteSchema('/sessions', InterimComponent, 'Sessions', null, false, 'MOCCA_ADMIN');

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
