function checkPerfectNumber(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  let sum = 1;
  let n = 1;

  while (n <= Math.floor(num / 2)) {
    if (num % n === 0) {
      sum += n;
    }

    n++;
  }
  return num === sum;
}
