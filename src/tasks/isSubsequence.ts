function isSubsequence(s: string, t: string): boolean {
  const buf = s.split("");

  for (let i = 0; i < t.length; i++) {
    if (buf.at(0) === t[i]) {
      buf.shift();
    }
  }

  return buf.length === 0;
}
