export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const indexMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (indexMap.has(num) && i - indexMap.get(num)! <= k) {
      return true;
    }

    indexMap.set(num, i);
  }

  return false;
}
