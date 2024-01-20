function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (map.has(num)) {
      return [map.get(num)!, i];
    }
    map.set(complement, i);
  }

  return [];
}
