const keyboard = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const result: string[] = [];

  const generateCombinations = (currentCombination: string, remainingDigits: string) => {
    if (remainingDigits.length === 0) {
      result.push(currentCombination);
      return;
    }

    const currentDigit = remainingDigits[0];
    const letters = keyboard[currentDigit as keyof typeof keyboard];

    for (const letter of letters) {
      generateCombinations(currentCombination + letter, remainingDigits.slice(1));
    }
  };

  generateCombinations("", digits);

  return result;
}
