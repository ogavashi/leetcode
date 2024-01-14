function findMaxAverage(nums: number[], k: number): number {
    let sum = nums.slice(0, k).reduce((acc, num) => acc + num, 0);
    let maxAverage = sum / k;

    for (let i = 0; i < nums.length - k; i++) {
        sum += nums[i + k] - nums[i];
        maxAverage = Math.max(maxAverage, sum / k);
    }

    return maxAverage;
};