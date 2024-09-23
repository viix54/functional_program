import { describe, expect, it } from '@jest/globals';
import { makeLazy, showBodyParams } from '../lazyEvaluatFunc.ts';

describe(`Testing lazy evaluation functionality`, () => {
  const sut = makeLazy;

  it(`return lazy function after passing normal function`, () => {
    expect(sut(showBodyParams)).toBeInstanceOf(Function);
  });

  it(`return right string after lazy evaluation`, () => {
    expect(sut(showBodyParams, 145, 46, 'white')()).toMatch(
      `My height: 145, my foot size: 46, my hair color: white`
    );
  });
  it(`return right string after lazy evaluation, but without passing any params`, () => {
    expect(sut(showBodyParams)()).toMatch(
      `My height: 110, my foot size: 45, my hair color: black`
    );
  });
});
