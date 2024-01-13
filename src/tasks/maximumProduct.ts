function maximumProduct(nums: number[]): number {
  const sortedNums = nums.slice().sort((a, b) => b - a);
  const [max1, max2, max3] = sortedNums.slice(0, 3);
  const [min1, min2] = sortedNums.slice(-2);

  const product1 = max1 * max2 * max3;
  const product2 = max1 * min1 * min2;

  return Math.max(product1, product2);
}
