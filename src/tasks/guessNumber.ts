/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const guess = (num: number) => num;

export function guessNumber(n: number): number {
  let left = 1,
    right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const answer = guess(mid);

    if (answer === 0) {
      return mid;
    }

    if (answer === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
