import { describe, expect, it } from '@jest/globals';
import { memoize, sum } from '../memoImplem.ts';

function testExecutionTime(memoizedFunc, a: number, b: number) {
  const startTime = performance.now();
  memoizedFunc(a, b);
  const endTime = performance.now();
  return endTime - startTime;
}

describe(`Testig memoization implementation`, () => {
  const memoizedSum = memoize(sum);

  const timeToCacheValue = testExecutionTime(memoizedSum, 1, 2);
  const timeToGetAlreadyCachedValue = testExecutionTime(memoizedSum, 1, 2);

  it(`when there's already some cached value, execution of memoized function with same params has to be faster`, () => {
    expect(timeToCacheValue > timeToGetAlreadyCachedValue).toBeTruthy();
  });
});
