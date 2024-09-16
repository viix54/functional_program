import { describe, expect, it } from '@jest/globals';
import { partFunc, sum } from '../problem1.ts';

describe('Partial Function', () => {
  //arrange - определение переменных и сетап того, что надо проверить
  // sut - system under testing

  let sut: (
    fn: (array: Array<number>) => number,
    ...argsInput: number[]
  ) => null | ((...argsInside: number[]) => number);
  beforeEach(() => {
    sut = partFunc;
  });
  it('return right sum of numbers', () => {
    //act
    const funcNorm: null | ((...argsInside: number[]) => number) = sut(
      sum,
      1,
      2,
      34
    );

    //assert - утверждение
    expect(funcNorm(23)).toEqual(60);
  });
  it('return null when no numbers has been added first', () => {
    //act
    const funcNull: null | ((...argsInside: number[]) => number) = sut(sum);

    //assert
    expect(funcNull).toBeNull();
  });
});
