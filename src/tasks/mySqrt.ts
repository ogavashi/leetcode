export function mySqrt(x: number): number {
  if (x <= 1) {
    return x;
  }

  let left = 1;
  let right = Math.floor(x / 2) + 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const prod = mid * mid;

    if (prod === x) {
      return mid;
    }

    if (prod < x) {
      left = mid + 1;
    }

    if (prod > x) {
      right = mid - 1;
    }
  }
  return right;
}
