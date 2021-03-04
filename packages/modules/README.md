# @warbly/modules

Reusable synthesis components.

## Modules

### `new SimpleGain(context, [options])`

Create a SimpleGain instance. `context` must reference an [`AudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/AudioContext) instance. `options` is an object containing configuration setting for the instance. Configurable options and their default values:

```js
const defaults = {
  connect: context.destination,
  gain: 1,
};
```

### `new SimpleOscillator(context, [options])`

Create a SimpleOscillator instance. `context` must reference an [`AudioContext`](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/AudioContext) instance. `options` is an object containing configuration setting for the instance. Configurable options and their default values:

```js
const defaults = {
  connect: context.destination,
  frequency: 440,
  detune: 0,
  type: 'sine',
};
```
