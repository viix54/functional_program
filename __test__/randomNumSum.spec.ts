import { describe, expect, it } from '@jest/globals';
import { calcRandomNumSum } from '../randomNumSum.ts';

describe(`Testing function to find sum of 10 random numbers`, () => {
  const cut = calcRandomNumSum;

  it(`return sum of 10 random numbers`, () => {
    expect(cut()).toBe(45);
  });
});
