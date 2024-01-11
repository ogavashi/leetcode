const vowels = ["a", "e", "i", "o", "u"];

export function reverseVowels(s: string): string {
  const string = s;

  const stringVowels = string
    .split("")
    .reverse()
    .filter((char) => vowels.includes(char.toLowerCase()));

  let answer: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      answer[i] = stringVowels.shift() || "";
    } else {
      answer[i] = s[i];
    }
  }

  return answer.join("");
}
