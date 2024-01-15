const eqSet = (xs: Set<string>, ys: Set<string>) =>
  xs.size === ys.size && [...xs].every((x) => ys.has(x));

function closeStrings(word1: string, word2: string): boolean {
  if (word1.length != word2.length || !eqSet(new Set(word1), new Set(word2))) {
    return false;
  }

  const map1 = new Map<string, number>();
  const map2 = new Map<string, number>();

  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
    map2.set(word2[i], (map1.get(word2[i]) || 0) + 1);
  }

  for (const [key, value] of map1) {
    console.log(key, value, map2);
    if (map2.get(key) !== value) {
      return false;
    }
  }

  return true;
}
