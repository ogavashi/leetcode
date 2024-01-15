function divide(dividend: number, divisor: number): number {
  if (divisor === 0) {
    return 0;
  }

  const INT_MIN = -Math.pow(2, 31);
  const INT_MAX = Math.pow(2, 31) - 1;

  const sign = dividend < 0 !== divisor < 0 ? -1 : 1;

  let absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);

  let res = Math.floor(absDividend / absDivisor) * sign;

  if (res < INT_MIN) {
    return INT_MIN;
  }

  if (res > INT_MAX) {
    return INT_MAX;
  }

  return res;
}
