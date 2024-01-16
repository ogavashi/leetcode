function nextPermutation(nums: number[]): number[] | null {
  let k = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      k = i;

      break;
    }
  }

  if (k === -1) {
    return null;
  }

  let l = -1;

  for (let i = nums.length - 1; i > k; i--) {
    if (nums[k] < nums[i]) {
      l = i;

      break;
    }
  }

  const copy = [...nums];

  [copy[k], copy[l]] = [copy[l], copy[k]];

  const reversedSequence = copy.slice(k + 1).reverse();

  copy.splice(k + 1, reversedSequence.length, ...reversedSequence);

  return copy;
}

function permute(nums: number[]): number[][] {
  const answer: number[][] = [nums];

  let next = nextPermutation(nums);

  while (next) {
    answer.push(next);
    next = nextPermutation(next);
  }

  return answer;
}
