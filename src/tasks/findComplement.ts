function findComplement(num: number): number {
  return parseInt(
    num
      .toString(2)
      .split("")
      .map((el) => (el === "0" ? "1" : "0"))
      .join(""),
    2
  );
}
