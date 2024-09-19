export function unfoldCB(currState: Array<number>) {
  if (currState.length === 10) {
    return false;
  }
  const nextValue = currState[currState.length - 1] + 1;
  const nextStateTuple: [number, Array<number>] = [
    nextValue,
    currState.concat(nextValue),
  ];
  return nextStateTuple;
}

export function unfold(
  callback: (currState: Array<number>) => false | [number, Array<number>],
  initialValue: number | Array<number>
) {
  const result =
    typeof initialValue === 'number'
      ? unfoldCB([initialValue])
      : unfoldCB(initialValue);

  if (result) {
    return unfold(callback, result[1]);
  }
  return initialValue;
}
