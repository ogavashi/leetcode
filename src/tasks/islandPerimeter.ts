function islandPerimeter(grid: number[][]): number {
  let p = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        p += 4;

        if (row > 0 && grid[row - 1][col] === 1) {
          p -= 2;
        }

        if (col > 0 && grid[row][col - 1] === 1) {
          p -= 2;
        }
      }
    }
  }

  return p;
}
