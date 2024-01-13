function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (r * c !== mat.length * mat[0].length) {
    return mat;
  }

  let rCount = 0,
    cCount = 0;

  let res: number[][] = new Array(r).fill(0).map(() => new Array(c).fill(0));

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      res[rCount][cCount] = mat[i][j];

      cCount++;

      if (cCount === c) {
        cCount = 0;
        rCount++;
      }
    }
  }

  return res;
}
