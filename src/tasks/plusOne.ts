export function plusOne(digits: number[]): number[] {
  const originalNumber = BigInt(digits.join(""));

  const resultNumber = originalNumber + BigInt(1);

  return String(resultNumber)
    .split("")
    .map((el) => Number(el));
}
