import { describe, expect, it } from '@jest/globals';
import { filteredArr } from '../filterOnlyEvenEl.ts';

describe(`Testing filter functionality implementation`, () => {
  const sut = filteredArr;

  it(`return filtered array with only even numbers`, () => {
    expect(sut([1, 2, 3, 4, 5, 6])).toStrictEqual([2, 4, 6]);
  });

  it(`return an empty array if filtered function was called with array without any elements`, () => {
    expect(sut([])).toStrictEqual([]);
  });
});
