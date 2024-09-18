function onlyEven(el: number) {
  return el % 2 === 0 ? true : false;
}

export function filteredArr(arr: Array<number>): [] | Array<number> {
  if (arr.length === 0) {
    return [];
  }
  const maybeEven = onlyEven(arr[0]) ? [arr[0]] : [];
  return maybeEven.concat(filteredArr(arr.slice(1)));
}
