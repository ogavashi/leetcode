function addDigits(num: number): number {
  const digitsSum = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + +digit, 0);

  return digitsSum < 10 ? digitsSum : addDigits(digitsSum);
}
