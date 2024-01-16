function missingNumber(nums: number[]): number {
  let desired = 0;
  for (let i = 0; i < nums.length + 1; i++) {
    desired += i;
  }

  const sum = nums.reduce((acc, cur) => acc + cur, 0);

  return desired - sum;
}
