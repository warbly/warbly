# @warbly/core

Low-level core library.

## Usage

### InterfaceParam

The `InterfaceParam` controls an individual aspect of an interface's functionality.

#### Constructor

`new InterfaceParam([options])`

Create an InterfaceParam instance. `options` is an object containing configuration settings for the instance. Configurable options and their default values:

```js
const defaults = {
  defaultValue: undefined, // Initial value of the `value` attribute
  value: defaultValue, // The parameter's value. Initialized to `defaultValue`
};
```
