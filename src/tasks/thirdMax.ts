function thirdMax(nums: number[]): number {
  const array = [...new Set(nums)];

  if (array.length < 3) {
    return Math.max(...array);
  }

  let maxCount = 0;
  let max = -Infinity;

  while (maxCount < 3) {
    max = Math.max(...array);
    array.splice(array.indexOf(max), 1);
    maxCount++;
  }

  return max;
}
