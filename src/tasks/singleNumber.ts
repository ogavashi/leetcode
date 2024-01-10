export function singleNumber(nums: number[]): number {
  return nums.reduce((acc, cur) => (acc ^= cur), 0);
}
