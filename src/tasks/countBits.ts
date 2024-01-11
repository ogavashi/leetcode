export function countBits(n: number): number[] {
  const array = Array.from({ length: n + 1 }, (_, i) => i);

  return array.map((el) => el.toString(2).split("").map(Number).filter(Boolean).length);
}
