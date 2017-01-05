# svelte-tracker

Tracker integration for Svelte

## Installation

To use `svelte-tracker`, run `meteor add svelte:tracker` or add `svelte:tracker` manually to `.meteor/packages`.

## API

The `withTracker` function exported by this package takes a Svelte component and an options object as arguments and returns a new Svelte component.
This new component is a container that wraps the passed component and handles data loading using reactive data sources such as [`Mongo.Cursor#fetch`](https://docs.meteor.com/api/collections.html#Mongo-Cursor-fetch) and [`ReactiveVar#get`](https://docs.meteor.com/api/reactive-var.html#ReactiveVar-get).

```js
withTracker(component, options)
```

The `options` object can contain the functions listed below.
Each of these functions receives the rendered instance of the wrapped component as argument and an initially empty context object as `this`.
You can use this context object to store container state, e.g., live query handles and timeout identifiers.

**`data(component)`** (required)

Called when the container is rendered.
Changes of reactive dependencies established in this function will cause it to rerun.

**`onrender(component)`** (optional)

Called after the container is rendered into the DOM and after the first call to `data`.

**`onteardown(component)`** (optional)

Called before the container is removed from the DOM.

## Example

See the [meteor-svelte/tracker-example](https://github.com/meteor-svelte/tracker-example) repository.
