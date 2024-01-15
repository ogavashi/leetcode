function getFrequencies(n: string): Map<number, number> {
  const map = new Map<number, number>();

  for (let i = 0; i < n.length; i++) {
    const digit = +n[i];
    map.set(digit, (map.get(digit) || 0) + 1);
  }

  return map;
}

function getNumber(map: Map<number, number>): string {
  let res = "";

  for (const [key, value] of map) {
    res += `${value}${key}`;
  }

  return res;
}

export function countAndSay(n: number): string {
  let current = "1";
  for (let i = 0; i < n - 1; i++) {
    const map = getFrequencies(current);
    current = getNumber(map);
  }

  return current;
}
