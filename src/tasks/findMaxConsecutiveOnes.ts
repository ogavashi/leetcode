function findMaxConsecutiveOnes(nums: number[]): number {
  let localMax = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      localMax++;

      continue;
    }
    max = Math.max(localMax, max);
    localMax = 0;
  }

  return Math.max(localMax, max);
}
