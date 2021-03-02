function SimpleGain(context, opts = {}) {
  const defaults = {
    connect: context.destination,
    gain: 1,
  };
  const d = defaults;

  const gainNode = context.createGain();
  gainNode.connect(opts.connect || d.connect);
  gainNode.gain.value = opts.gain || d.gain;

  return gainNode;
}

export default SimpleGain;
