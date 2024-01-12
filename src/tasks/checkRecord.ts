function checkRecord(s: string): boolean {
  let A = 0;
  let L = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L" && s[i + 1] === "L" && s[i + 2] === "L") {
      return false;
    }
    if (s[i] === "A") {
      A++;
    }
    if (A >= 2 || L >= 3) {
      return false;
    }
  }

  return true;
}
