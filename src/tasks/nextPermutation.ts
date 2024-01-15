/**
 Do not return anything, modify nums in-place instead.
 */
export function nextPermutation(nums: number[]): void {
  let k = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      k = i;

      break;
    }
  }

  if (k === -1) {
    nums.sort((a, b) => a - b);

    return;
  }

  let l = -1;

  for (let i = nums.length - 1; i > k; i--) {
    if (nums[k] < nums[i]) {
      l = i;

      break;
    }
  }

  [nums[k], nums[l]] = [nums[l], nums[k]];

  const reversedSequence = nums.slice(k + 1).reverse();

  nums.splice(k + 1, reversedSequence.length, ...reversedSequence);
}
