import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { mainRoutes, fundsRoutes, subscriberRoutes } from './RouteList';

/**
 * A utility method to get the list of possible RouteSchema
 * MSISDN / BAID / Customer ID has been seleted the method returns all the list
 * @return {[RouteSchema]} Return list of {[RouteSchema]}
 *    based on whether MSISDN / BAID / Customer ID is selected or not.
 */
export function getRouteList() {
  // const mainRoute = getMainRoutes();

  /* TODO this variable should be fetched from redux store */
  const isSubscriberSelected = true;

  return isSubscriberSelected ? mainRoutes.concat(fundsRoutes).concat(subscriberRoutes) : mainRoutes;
}

/**
 * A utility class to create React-Switch router
 * @return {[Switch]} React-Switch component. The Route elements inside
 *    the Switch depends on the state of MSISDN / BAID / Customer ID
 */
export function getSwitchRoute() {
  /* TODO routes can be passed in as an argument to use the same references
      in both switch and navigation */
  const routes = getRouteList();
  const reactRoute = routes.map(value => <Route exact={value.exact} key={value.path} path={value.path} component={value.component} />);

  return (
    <Switch>
      {reactRoute}
    </Switch>
  );
}
