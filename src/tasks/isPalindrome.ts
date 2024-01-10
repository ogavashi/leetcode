export function isPalindrome(s: string): boolean {
  const formatted = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("")
    .map((char) => char.toLowerCase());

  let left = 0,
    right = formatted.length - 1;

  while (left < right) {
    if (formatted[left] !== formatted[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
