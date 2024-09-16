// type partFuncOutput = (array: Array<number>) => number | number;

export function sum(args: Array<number>): number {
  // console.log(args)
  return args.reduce((akum, next) => akum + next, 0);
}

export function partFunc(
  fn: (array: Array<number>) => number,
  ...argsInput: number[]
) {
  console.log(argsInput);
  if (argsInput.length !== 0) {
    return (...argsInside: number[]): number => {
      return fn(argsInput.concat(...argsInside));
    };
  }
  return null;
}

// const partSum = partFunc(sum, 3, 4, 5);
// const partSum0 = partFunc(sum);
// console.log(partSum(23));
// console.log(partSum0());
// const partSum0 = partFunc(sum);
// console.log(partSum0);
