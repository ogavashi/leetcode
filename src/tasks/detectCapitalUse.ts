function detectCapitalUse(word: string): boolean {
  const arr = word.split("");

  return (
    arr.every((char) => char === char.toUpperCase()) ||
    arr.every((char) => char === char.toLowerCase()) ||
    (arr[0] === arr[0].toUpperCase() && arr.slice(1).every((char) => char === char.toLowerCase()))
  );
}
