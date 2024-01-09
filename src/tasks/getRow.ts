export function getRow(rowIndex: number): number[] {
  const line: number[] = [];

  for (let i = 0; i <= rowIndex; i++) {
    const coef = i === 0 ? 1 : (line[i - 1] * (rowIndex - i + 1)) / i;
    line.push(coef);
  }

  return line;
}
