export const hasRight = (rights, routeRight) => {
  return rights.includes(routeRight.toUpperCase());
};
