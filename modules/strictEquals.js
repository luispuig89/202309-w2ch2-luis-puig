export function strictEquals(x, y) {
  if (Object.is(x, NaN) || Object.is(y, NaN)) {
    return false;
  }

  if (
    (Object.is(x, 0) && Object.is(y, -0)) ||
    (Object.is(x, -0) && Object.is(y, 0))
  ) {
    return true;
  }

  return Object.is(x, y);
}
