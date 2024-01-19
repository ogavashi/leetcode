function nextGreatestLetter(letters: string[], target: string): string {
  const firstChar = letters[0];

  return letters.sort().filter((c) => c.charCodeAt(0) > target.charCodeAt(0))[0] || firstChar;
}
