export function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];

  let left = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] > 1 || i === nums.length - 1) {
      result.push(nums[i] !== left ? `${left}->${nums[i]}` : `${left}`);
      left = nums[i + 1];

      continue;
    }
  }

  return result;
}
