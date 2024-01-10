function hammingWeight(n: number): number {
  const stringified = n.toString(2);

  return stringified.split("").reduce((acc, cur) => acc + Number(cur), 0);
}
