import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { getMainRoutes, getFundsRoutes } from './RouteList';

/**
 * A utility method to get the list of possible RouteSchema
 * MSISDN / BAID / Customer ID has been seleted the method returns all the list
 * @return {[RouteSchema]} Return list of {[RouteSchema]}
 *    based on whether MSISDN / BAID / Customer ID is selected or not.
 */
export function getRouteList() {
  const mainRoute = getMainRoutes();

  /* TODO this variable should be fetched from redux store */
  const isSubscriberSelected = true;

  return isSubscriberSelected ? mainRoute.concat(getFundsRoutes()) : mainRoute;
}

/**
 * A utility class to create React-Switch router
 * @return {[Switch]} React-Switch component. The Route elements inside
 *    the Switch depends on the state of MSISDN / BAID / Customer ID
 */
export function getSwitchRoute() {
  const routes = getRouteList();
  const reactRoute = [];
  routes.forEach((value) => {
    reactRoute.push(<Route key={value.path} path={value.path} component={value.component} />);
  });

  return (
    <Switch>
      {reactRoute}
    </Switch>
  );
}
