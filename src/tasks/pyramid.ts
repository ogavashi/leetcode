export function pyramid(n: number): void {
  const amount = n * 2 - 1;
  const mid = Math.floor(amount / 2);
  let res = ``;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < amount; j++) {
      if (j >= mid - i && j <= mid + i) {
        res += "*";
        continue;
      }
      res += " ";
    }
    res += `\n`;
  }

  console.log(res);
}
