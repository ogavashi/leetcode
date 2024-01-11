function isPerfectSquare(num: number): boolean {
  if (num < 2) {
    return num === 0 || num === 1;
  }

  let left = 1,
    right = Math.floor(num / 2);

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    const square = mid ** 2;

    if (square === num) {
      return true;
    }

    if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
