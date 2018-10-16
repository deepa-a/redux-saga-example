/**
 * A class to define the route schema for creating route and navigation links
 */
class RouteSchema {
  constructor(path, component, label, icon, exact) {
    this.path = path;
    this.component = component;
    this.label = label;
    this.icon = icon;
    this.exact = exact
  }
}

export default RouteSchema;
