type ShowBodyParams = number | string;

export function showBodyParams([
  height = 110,
  footSize = 45,
  hairColor = 'black',
]: Array<ShowBodyParams>) {
  return `My height: ${height}, my foot size: ${footSize}, my hair color: ${hairColor}`;
}

export function makeLazy(
  cb: (bodyParamArr: Array<ShowBodyParams>) => string,
  ...bodyParams: Array<ShowBodyParams>
) {
  return () => cb(bodyParams);
}
