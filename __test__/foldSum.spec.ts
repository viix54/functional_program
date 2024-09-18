import { describe, expect, it } from '@jest/globals';
import { sum, fold } from '../foldSum.ts';

describe(`Testing folding functionality using sum function`, () => {
  //arrange
  const sut = fold;

  //action
  it(`return right sum of array's elements without initial value `, () => {
    expect(sut([1, 2, 3, 4, 5], sum)).toBe(15);
  });
  it(`return right sum of array's elements with initial value `, () => {
    expect(sut([1, 2, 3, 4, 5], sum, 15)).toBe(30);
  });
});
