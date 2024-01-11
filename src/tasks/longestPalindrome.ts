function longestPalindrome(s: string): number {
  const map = new Map<string, number>();

  s.split("").forEach((char) => map.set(char, (map.get(char) || 0) + 1));

  let length = 0;
  let hasOddFrequency = false;

  for (let [, value] of map) {
    length += Math.floor(value / 2) * 2;
    if (value % 2 !== 0) {
      hasOddFrequency = true;
    }
  }

  return length + (hasOddFrequency ? 1 : 0);
}
