export function sum(arr: Array<number>) {
  return arr.reduce((acc, value) => acc + value, 0);
}

export function memoize(fn: (arr: Array<number>) => number) {
  let cache = {};

  return function (...args: Array<number>): number {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(args);
    cache = { ...cache, [key]: result };
    return result;
  };
}
