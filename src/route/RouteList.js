import React from 'react';
import RouteSchema from './RouteSchema';

/**
 * Get default route list
 * @return {[List<RouteSchema>]} List of RouteSchema
 */
export function getMainRoutes() {
  const routes = [];
  routes.push(new RouteSchema('/voucher', InterimComponent, null, null));
  routes.push(new RouteSchema('/management/customer', InterimComponent, null, null));
  routes.push(new RouteSchema('/management/billing-account', InterimComponent, null, null));
  routes.push(new RouteSchema('/management/subscriber', InterimComponent, null, null));
  routes.push(new RouteSchema('/shared-arrangements', InterimComponent, null, null));
  routes.push(new RouteSchema('/TTI_WEB', InterimComponent, null, null));
  return routes;
}

/**
 * Get route list for Funds functionalities
 * @return {[List<RouteSchema>]} list for Funds functionalities
 */
export function getFundsRoutes() {
  const routes = [];
  routes.push(new RouteSchema('/funds', InterimComponent, null, null));
  routes.push(new RouteSchema('/funds/recharge', InterimComponent, null, null));
  routes.push(new RouteSchema('/funds/adjustments', InterimComponent, null, null));
  routes.push(new RouteSchema('/funds/immediate-changing', InterimComponent, null, null));
  routes.push(new RouteSchema('/funds/purchase-bundle', InterimComponent, null, null));
  routes.push(new RouteSchema('/funds/commercial-offer', InterimComponent, null, null));
  routes.push(new RouteSchema('/funds/redeem-voucher', InterimComponent, null, null));

  routes.push(new RouteSchema('/subscriber-details', InterimComponent, null, null));
  routes.push(new RouteSchema('/history', InterimComponent, null, null));
  routes.push(new RouteSchema('/bundles', InterimComponent, null, null));
  routes.push(new RouteSchema('/family-and-friend', InterimComponent, null, null));
  routes.push(new RouteSchema('/low-credit-management', InterimComponent, null, null));
  routes.push(new RouteSchema('/notifications', InterimComponent, null, null));
  routes.push(new RouteSchema('/subscriptions', InterimComponent, null, null));
  routes.push(new RouteSchema('/spend-limits', InterimComponent, null, null));
  routes.push(new RouteSchema('/sessions', InterimComponent, null, null));
  return routes;
}

/* TODO delete this component when all the components are replaced */
class InterimComponent extends React.Component {
  render() {
    return (<h1>This is a temporay screen.<br/> Replace me with the actual component</h1>);
  }
}
