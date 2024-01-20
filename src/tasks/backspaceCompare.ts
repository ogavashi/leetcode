function backspaceCompare(s: string, t: string): boolean {
  return processString(s) === processString(t);
}

function processString(str: string): string {
  let result: string[] = [];

  for (let char of str) {
    if (char === "#") {
      result.pop();
    } else {
      result.push(char);
    }
  }

  return result.join("");
}
