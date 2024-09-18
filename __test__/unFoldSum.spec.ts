import { describe, expect, it } from '@jest/globals';
import { unfold, unfoldCB } from '../unFoldSum.ts';

describe(`Testing unfold functionality`, () => {
  const sut = unfold;

  it(`return 10 unfolding data with an initial value`, () => {
    expect(sut(unfoldCB, 4)).toStrictEqual([4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });

  it(`return 10 unfolding data without an initial value`, () => {
    expect(sut(unfoldCB)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
