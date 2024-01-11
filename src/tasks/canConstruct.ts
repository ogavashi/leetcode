function canConstruct(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) {
    return false;
  }

  const letters = magazine.split("");

  for (let i = 0; i < ransomNote.length; i++) {
    const ransomLetter = ransomNote[i];

    const foundLetter = letters.indexOf(ransomLetter);

    if (foundLetter < 0) {
      return false;
    }

    letters.splice(foundLetter, 1);
  }

  return true;
}
