export function reverseWords(s: string): string {
  let count = 0;

  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " || i === s.length - 1) {
      const start = i - count;
      const end = i === s.length - 1 ? i + 1 : i;
      res += s.substring(start, end).split("").reverse().join("");
      count = 0;

      if (i !== s.length - 1) {
        res += " ";
      }

      continue;
    }
    count++;
  }

  return res;
}
