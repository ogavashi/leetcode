function maxCount(m: number, n: number, ops: number[][]): number {
  if (!ops.length) {
    return m * n;
  }

  //   let max = 0;
  //   let maxCount = 0;
  //   let res: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));
  //   ops.forEach(([row, col]) => {
  //     for (let i = 0; i < row; i++) {
  //       for (let j = 0; j < col; j++) {
  //         res[i][j]++;
  //         if (res[i][j] > max) {
  //           max = res[i][j];
  //           maxCount = 0;
  //         }
  //         if (res[i][j] === max) {
  //           maxCount++;
  //         }
  //       }
  //     }
  //   });

  //   return maxCount;

  const [minRow, minCol] = ops.reduce(
    (min, [row, col]) => [Math.min(min[0], row), Math.min(min[1], col)],
    [Infinity, Infinity]
  );
  return minRow * minCol;
}
