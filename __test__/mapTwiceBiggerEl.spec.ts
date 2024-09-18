import { describe, expect, it } from '@jest/globals';
import { map } from '../mapTwiceBiggerEl.ts';

describe(`Testing map implementation functionality`, () => {
  const sut = map;

  it(`return array with twice bigger elements value`, () => {
    expect(sut([1, 2, 3, 4])).toStrictEqual([2, 4, 6, 8]);
  });
});
