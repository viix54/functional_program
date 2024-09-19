import { fold, sum } from './foldSum.ts';
import { unfold, unfoldCB } from './unFoldSum.ts';

export function calcRandomNumSum() {
  const randomNumArr = unfold(unfoldCB, 0);
  if (Array.isArray(randomNumArr)) {
    return fold(randomNumArr, sum);
  }
}
