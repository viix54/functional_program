import { describe, expect, it } from '@jest/globals';
import { unfold, unfoldCB } from '../unFoldSum.ts';

describe(`Testing unfold functionality`, () => {
  const sut = unfold;

  it(`return 10 unfolding data `, () => {
    expect(sut(unfoldCB, 4)).toStrictEqual([4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
  });
});
