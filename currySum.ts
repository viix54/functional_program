export function sum(a: number, b: number, c: number) {
  return a + b + c;
}

export function forMoreCurry(fn) {
  return function moreCurried(...args: Array<number>) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...args2: Array<number>) {
      return moreCurried(...args.concat(args2));
    };
  };
}
