function fizzBuzz(n: number): string[] {
  return Array.from({ length: n }, (_, i) => i + 1).map((el) => {
    if (el % 3 === 0 && el % 5 === 0) {
      return "FizzBuzz";
    }
    if (el % 3 === 0) {
      return "Fizz";
    }
    if (el % 5 === 0) {
      return "Buzz";
    }
    return `${el}`;
  });
}
