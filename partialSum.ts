export function sum(...args: Array<number>) {
  return args.reduce((akum, next) => akum + next, 0);
}

export function partial(
  fn: (...array: Array<number>) => number,
  ...argsInput: Array<number>
) {
  if (argsInput.length !== 0) {
    return (...argsInside: Array<number>) => {
      return fn(...argsInput.concat(argsInside));
    };
  }
  return null;
}
