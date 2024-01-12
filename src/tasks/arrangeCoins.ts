function arrangeCoins(n: number): number {
  let row = 1;
  let num = n;

  while (row < n) {
    if (num - row < 0) {
      return row - 1;
    }
    num -= row;
    row++;
  }

  return row - 1;
}
