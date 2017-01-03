import Container from './Container.html';

export function withTracker(component, options) {
  // Create a new component and store the original component and the options so
  // that they can be accessed in the container's `onrender` function
  function Wrapped() {
    this._component = component;
    this._options = options;

    Container.apply(this, arguments);
  }

  // Inherit from container
  Wrapped.prototype = Object.create(Container.prototype);

  return Wrapped;
}
