import { beforeEach, describe, expect, it } from '@jest/globals';
import { partial, sum } from '../partialSum.ts';

describe('Partial Function', () => {
  //arrange - определение переменных и сетап того, что надо проверить

  // sut - system under testing

  let sut: (
    fn: (...array: Array<number>) => number,
    ...argsInput: Array<number>
  ) => null | ((...argsInside: Array<number>) => number);

  beforeEach(() => {
    sut = partial;
  });

  it('return right sum of numbers', () => {
    //act
    const funcNorm: null | ((...argsInside: Array<number>) => number) = sut(
      sum,
      1,
      2,
      34
    );

    //assert - утверждение
    if (funcNorm !== null) {
      expect(funcNorm(23)).toEqual(60);
    }
  });

  it('return null when no numbers has been added first', () => {
    //act
    const funcNull: null | ((...argsInside: Array<number>) => number) =
      sut(sum);

    //assert
    expect(funcNull).toBeNull();
  });
});
