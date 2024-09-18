export function twiceBigger(el: number) {
  return el * 2;
}

export function map(array: Array<number>): Array<number> {
  if (array.length === 0) {
    return [];
  }
  return [twiceBigger(array[0])].concat(map(array.slice(1)));
}
