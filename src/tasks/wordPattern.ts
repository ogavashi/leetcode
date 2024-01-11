export function wordPattern(pattern: string, s: string): boolean {
  const arr1 = pattern.split("");
  const arr2 = s.split(" ");

  if (arr1.length !== arr2.length) {
    return false;
  }

  const map: { [key in string]: string } = {};
  const uniquePattern = Array.from(new Set(arr1));
  const uniqueS = Array.from(new Set(arr2));

  for (let i = 0; i < uniquePattern.length; i++) {
    map[uniquePattern[i]] = uniqueS[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== map[pattern[i]]) {
      return false;
    }
  }

  return true;
}
