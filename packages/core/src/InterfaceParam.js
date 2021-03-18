function InterfaceParam(opts = {}) {
  this.defaultValue = opts.defaultValue;
  this.value = opts.value || opts.defaultValue;
}

InterfaceParam.prototype = Object.create(null, {});

export default InterfaceParam;
