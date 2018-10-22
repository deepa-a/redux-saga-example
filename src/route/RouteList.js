import React from 'react';
import Home from 'components/Home';
import SubscriberDetails from 'components/SubscriberDetails';
import RouteSchema from './RouteSchema';

/* TODO delete this component when all the components are replaced */
class InterimComponent extends React.Component {
  render() {
    return (<h1>This is a temporary screen.<br /> Replace me with the actual component</h1>);
  }
}

/**
 * Define all routes
 */
/* Default routes */
const home = new RouteSchema('/', Home, 'Home', null, true, ['MOCCA_READ_SUBSCRIBER']);
const voucher = new RouteSchema('/voucher', InterimComponent, 'Voucher', null, false, ['MOCCA_READ_VOUCHER']);
const manageCustomer = new RouteSchema('/management/customer', InterimComponent, 'Manage Customer', null, false, ['MOCCA_CREATE_CUSTOMER', 'MOCCA_DELETE_CUSTOMER', 'MOCCA_MODIFY_CUSTOMER']);
const billingAccount = new RouteSchema('/management/billing-account', InterimComponent, 'Manage Billing Account', null, false, ['MOCCA_CREATE_BILLING_ACCOUNT', 'MOCCA_DELETE_BILLING_ACCOUNT', 'MOCCA_MODIFY_BILLING_ACCOUNT']);
const manageSubscriber = new RouteSchema('/management/subscriber', InterimComponent, 'Manage Subscriber', null, false, ['MOCCA_CREATE_SUBSCRIBER', 'MOCCA_DELETE_SUBSCRIBER', 'MOCCA_MODIFY_SUBSCRIBER']);
const sharedArrangements = new RouteSchema('/shared-arrangements', InterimComponent, 'Shared Arrangements', null, false, ['MOCCA_READ_SHARED_ARRANGEMENT']);
const ttiWeb = new RouteSchema('/TTI_WEB', InterimComponent, 'VMS Management GUI', null, false, ['MOCCA_VMS']);

/* Funds routes */
const fundsRecharge = new RouteSchema('/funds/recharge', InterimComponent, 'Recharge', null, false, ['MOCCA_CREATE_FUNDS', 'MOCCA_MODIFY_SUBSCRIBER']);
const fundsAdjustments = new RouteSchema('/funds/adjustments', InterimComponent, 'Adjustments', null, false, ['MOCCA_CREATE_FUNDS', 'MOCCA_MODIFY_SUBSCRIBER']);
const fundsImmediateChanging = new RouteSchema('/funds/immediate-changing', InterimComponent, 'Immediate Charging', null, false, ['MOCCA_CREATE_FUNDS', 'MOCCA_MODIFY_SUBSCRIBER']);
const fundsPurchaseBundle = new RouteSchema('/funds/purchase-bundle', InterimComponent, 'Purchase Bundle', null, false, ['MOCCA_CREATE_FUNDS', 'MOCCA_MODIFY_SUBSCRIBER']);
const fundsCommercialOffer = new RouteSchema('/funds/commercial-offer', InterimComponent, 'Commercial Offer', null, false, ['MOCCA_CREATE_FUNDS', 'MOCCA_MODIFY_SUBSCRIBER', 'MOCCA_MODIFY_SUBSCRIBER_COMMERCIAL_OFFER']);
const fundsRedeemVoucher = new RouteSchema('/funds/redeem-voucher', InterimComponent, 'Redeem Voucher', null, false, ['MOCCA_CREATE_FUNDS', 'MOCCA_MODIFY_SUBSCRIBER']);

/* Subscriber routes */
const subscriberDetails = new RouteSchema('/subscriber-details', SubscriberDetails, 'Subscriber Details', null, false, ['MOCCA_READ_SUBSCRIBER']);
const history = new RouteSchema('/history', InterimComponent, 'History', null, false, ['MOCCA_READ_HISTORY']);
const bundles = new RouteSchema('/bundles', InterimComponent, 'Bundles', null, false, ['MOCCA_READ_BUNDLE']);
const familyAndFriend = new RouteSchema('/family-and-friend', InterimComponent, 'Family & Friends', null, false, ['MOCCA_READ_FAMILY_AND_FRIENDS']);
const lowCreditManagement = new RouteSchema('/low-credit-management', InterimComponent, 'Low Credit Management', null, false, ['MOCCA_READ_LOW_CREDIT_MANAGEMENT']);
const notifications = new RouteSchema('/notifications', InterimComponent, 'Notifications', null, false, ['MOCCA_READ_NOTIFICATION']);
const subscriptions = new RouteSchema('/subscriptions', InterimComponent, 'Subscriptions', null, false, ['MOCCA_READ_SUBSCRIPTION']);
const spendLimits = new RouteSchema('/spend-limits', InterimComponent, 'Spend Limits', null, false, ['MOCCA_READ_SPEND_LIMIT']);
const sessions = new RouteSchema('/sessions', InterimComponent, 'Sessions', null, false, ['MOCCA_READ_SESSION']);
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
