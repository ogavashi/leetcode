function reverseBits(n: number): number {
  const binaryString = n.toString(2).padStart(32, "0");
  const reversed = binaryString.split("").reverse().join("");

  return parseInt(reversed, 2);
}
