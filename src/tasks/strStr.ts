// 28. Find the Index of the First Occurrence in a String

export function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }

  return -1;
}
