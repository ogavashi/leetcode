function shift(str: string) {
  str = str.slice(-1) + str.slice(0, -1);

  return str;
}

function repeatedSubstringPattern(s: string): boolean {
  let amount = 0;
  let max = Math.floor(s.length / 2);
  let string = s;

  while (amount < max) {
    string = shift(string);

    if (string === s) {
      return true;
    }

    amount++;
  }

  return false;
}
