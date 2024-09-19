import { filteredArr } from './filterOnlyEven';
import { fold, sum } from './foldSum';

export function averageEvenEl(arr: Array<number>) {
  const onlyEvenElArr = filteredArr(arr);
  if (onlyEvenElArr.length !== 0) {
    return fold(onlyEvenElArr, sum) / onlyEvenElArr.length;
  }
  return 0;
}
