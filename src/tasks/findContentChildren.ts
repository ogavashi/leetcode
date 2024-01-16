function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let pg = 0;
  let ps = 0;

  let counter = 0;

  while (ps < s.length) {
    if (g[pg] < s[ps]) {
      counter++;
      pg++;
      ps++;
    } else {
      ps++;
    }
  }

  return counter;
}
