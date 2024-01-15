export function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);

  const answer: number[] = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      answer.push(i);
    }
  }

  return answer;
}
