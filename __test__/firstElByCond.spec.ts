import { expect, describe, it } from '@jest/globals';
import { findFirstElByCond } from '../firstElByCond.ts';

describe(`Testing functionality which will find the first element in array that satisfies given condition`, () => {
  const sut = findFirstElByCond;

  it(`return the first element in array [1,2,3,4,5] that satisfies condition: el > 2`, () => {
    expect(sut([1, 2, 3, 4, 5], (el) => el > 2)).toBe(3);
  });

  it(`return null if array's empty`, () => {
    expect(sut([], (el) => el > 2)).toMatch(`There's no suitable elements`);
  });

  it(`return null if there's no suitable elements in an array`, () => {
    expect(sut([1, 2, 1, 1, 2], (el) => el > 2)).toMatch(
      `There's no suitable elements`
    );
  });
});
