export function firstUniqChar(s: string): number {
  const map = new Map<string, number>();

  s.split("").forEach((char) => {
    map.set(char, (map.get(char) || 0) + 1);
  });

  for (let [key, value] of map) {
    if (value === 1) {
      return s.indexOf(key);
    }
  }

  return -1;
}
