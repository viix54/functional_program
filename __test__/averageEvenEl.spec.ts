import { describe, expect, it } from '@jest/globals';
import { averageEvenEl } from '../averageEvenEl.ts';

describe(`Testing functionality to find average of even numbers`, () => {
  const sut = averageEvenEl;

  it(`return average of even numbers when array has elements`, () => {
    expect(sut([1, 2, 3, 4, 0])).toBe(2);
  });

  it(`return 0 when array was empty`, () => {
    expect(sut([])).toBe(0);
  });
});
