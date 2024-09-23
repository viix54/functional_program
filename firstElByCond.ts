export function findFirstElByCond(
  arr: Array<number>,
  cond: (el: number) => boolean
) {
  if (arr.length === 0) {
    return `There's no suitable elements`;
  }
  if (cond(arr[0])) {
    return arr[0];
  }
  return findFirstElByCond(arr.slice(1), cond);
}
