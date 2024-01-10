/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome2(head: ListNode | null): boolean {
  const visited: number[] = [];

  function visit(node: ListNode | null): void {
    if (node) {
      visited.push(node.val);
      visit(node.next);
    }
  }

  visit(head);

  let left = 0,
    right = visited.length - 1;

  while (left < right) {
    if (visited[left] !== visited[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
