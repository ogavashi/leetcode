/*

Input: strs = ["flower","flow","flight"]
Output: "fl"

*/

export function longestCommonPrefix(strs: string[]): string {
  return strs.reduce((prefix, str) => {
    let i = 0;
    while (i < prefix.length && i < str.length && prefix[i] === str[i]) {
      i++;
    }
    return prefix.slice(0, i);
  }, strs[0] || "");
}
