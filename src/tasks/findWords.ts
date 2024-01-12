const firstRow = new Set("qwertyuiop");
const secondRow = new Set("asdfghjkl");
const thirdRow = new Set("zxcvbnm");

const rows = [firstRow, secondRow, thirdRow];

function tryWord(word: string): boolean {
  const lowerCasedWord = word.toLowerCase();
  for (const row of rows) {
    if (Array.from(lowerCasedWord).every((char) => row.has(char))) {
      return true;
    }
  }
  return false;
}

function findWords(words: string[]): string[] {
  const res: string[] = [];
  for (let i = 0; i < words.length; i++) {
    if (tryWord(words[i])) {
      res.push(words[i]);
    }
  }

  return res;
}
