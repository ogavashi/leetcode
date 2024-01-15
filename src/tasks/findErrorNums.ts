const findErrorNums = (nums: number[]): number[] => {
  const arr: number[] = new Array(nums.length + 1).fill(0);

  nums.forEach((num) => {
    arr[num]++;
  });

  return [arr.indexOf(2), arr.lastIndexOf(0)];
};
