function isAnagram(s: string, t: string): boolean {
  return (
    s
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("") ===
    t
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("")
  );
}
