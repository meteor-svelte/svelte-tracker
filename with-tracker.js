import Container from './imports/Container.html';

export function withTracker(component, dataProvider) {
  // Create a new component and store the original component and the data
  // provider so that they can be accessed in the container's `onrender`
  // function
  function Wrapped() {
    this._component = component;
    this._dataProvider = dataProvider;

    Container.apply(this, arguments);
  }

  // Inherit from container
  Wrapped.prototype = Object.create(Container.prototype);

  return Wrapped;
}
