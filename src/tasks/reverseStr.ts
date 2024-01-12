function reverseStr(s: string, k: number): string {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i += 2 * k) {
    let l = i;
    let r = Math.min(i + k - 1, arr.length - 1);

    while (l < r) {
      let temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;

      l++;
      r--;
    }
  }

  return arr.join("");
}
