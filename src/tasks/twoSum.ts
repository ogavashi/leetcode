function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  nums.forEach((num, index) => {
    const existing = map.get(num);

    if (existing !== undefined) {
      return [existing, index];
    }
    map.set(target - num, index);
  });

  return [];
}
