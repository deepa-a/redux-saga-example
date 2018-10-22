export const hasRight = (userRights, routeRights) => routeRights.every(right => userRights.includes(right.toUpperCase()));
