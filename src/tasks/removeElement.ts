export function removeElement(nums: number[], val: number): number {
  let currentPosition: number = 0;

  for (const num of nums) {
    if (num !== val) {
      nums[currentPosition] = num;
      currentPosition++;
    }
  }

  return currentPosition;
}
