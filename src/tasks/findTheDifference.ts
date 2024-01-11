function findTheDifference(s: string, t: string): string {
  const str1 = s.split("").sort((a, b) => a.localeCompare(b));
  const str2 = t.split("").sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < str2.length; i++) {
    if (str1[i] !== str2[i]) {
      return str2[i];
    }
  }

  return "";
}
