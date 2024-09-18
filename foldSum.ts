export function sum(prevValue: number, currValue: number) {
  return prevValue + currValue;
}

export function fold(
  array: Array<number>,
  callback: (a: number, b: number) => number,
  initialValue = 0
) {
  if (array.length !== 0) {
    const result = sum(initialValue, array[0]);
    return fold(array.slice(1), callback, result);
  }
  return initialValue;
}
