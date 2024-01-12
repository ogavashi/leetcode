function licenseKeyFormatting(s: string, k: number): string {
  const sArray = s
    .split("")
    .filter((el) => el !== "-")
    .map((el) => el.toUpperCase());
  let res = "";

  for (let i = sArray.length - 1; i >= 0; i--) {
    let insert = sArray[i];
    if (res.length % (k + 1) === k) {
      insert += "-";
    }
    res = insert + res;
  }

  return res;
}
