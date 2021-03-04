function SimpleOscillator(context, opts = {}) {
  const defaults = {
    connect: context.destination,
  };
  const d = defaults;

  const oscNode = context.createOscillator();
  oscNode.connect(opts.connect || d.connect);

  if (opts.frequency) {
    oscNode.frequency.setValueAtTime(opts.frequency, context.currentTime);
  }

  if (opts.detune) {
    oscNode.detune.setValueAtTime(opts.detune, context.currentTime);
  }

  if (opts.type) {
    oscNode.type = opts.type;
  }

  return oscNode;
}

export default SimpleOscillator;
