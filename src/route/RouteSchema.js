/**
 * A class to define the route schema for creating route and navigation links
 */
class RouteSchema {
  constructor(path, component, label, icon) {
    this.path = path;
    this.component = component;
    this.label = label;
    this.icon = icon;
  }
}

export default RouteSchema;
