export const hasRight = (userRights, routeRights) => {
  return routeRights.every(right => userRights.includes(right.toUpperCase()));
};
