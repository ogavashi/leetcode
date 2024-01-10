export function majorityElement(nums: number[]): number {
  const seen: { [key in string]: number } = {};

  nums.forEach((num) => {
    seen[num] = seen[num] ? seen[num] + 1 : 1;
  });

  return Number(Object.keys(seen).reduce((a, b) => (seen[a] > seen[b] ? a : b)));
}
