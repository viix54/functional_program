import { describe, expect, it } from '@jest/globals';
import { sum, forMoreCurry } from '../currySum.ts';

describe(`Currying Function`, () => {
  //arrange
  const sut = forMoreCurry;

  describe(`Testing for normal usage of currying function with numbers`, () => {
    const curryNorm = sut(sum);

    it(`return 21 when called in form (1)(10)(10)`, () => {
      //assert
      expect(curryNorm(1)(10)(10)).toBe(21);
    });

    it(`return 40 when called in form (20,19)(1)`, () => {
      //assert
      expect(curryNorm(20, 19)(1)).toBe(40);
    });

    it(`return 15 when called in form (20)(-10,5)`, () => {
      //assert
      expect(curryNorm(20)(-10, 5)).toBe(15);
    });
  });
});
