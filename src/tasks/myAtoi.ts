function myAtoi(s: string): number {
  const numberRegex = /-?\d+(\.\d+)?/g;
  const matches = s.match(numberRegex);

  if (!matches) {
    return 0;
  }

  const num = Number(matches[0]);

  return num;
}
