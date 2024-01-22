function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (original.length !== m * n) {
    return [];
  }

  return Array.from({ length: m }, (_, rowIndex) =>
    original.slice(rowIndex * n, (rowIndex + 1) * n)
  );
}
