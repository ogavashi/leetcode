function searchRange(nums: number[], target: number): number[] {
  const startIndex = nums.indexOf(target);

  if (startIndex === -1) {
    return [-1, -1];
  }

  const endIndex = nums.lastIndexOf(target);

  return [startIndex, endIndex];
}
