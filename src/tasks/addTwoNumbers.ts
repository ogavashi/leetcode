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

function getNumber(l: ListNode | null): bigint {
  const num: number[] = [];

  function visit(node: ListNode | null) {
    if (node) {
      num.push(node.val);
      visit(node.next);
    }
  }

  visit(l);

  return BigInt(num.reverse().join(""));
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  console.log(getNumber(l1), getNumber(l2));

  const num1 = getNumber(l1);
  const num2 = getNumber(l2);

  const res = num1 + num2;

  const nodes = String(res)
    .split("")
    .reverse()
    .map((element) => new ListNode(+element));

  nodes.forEach((element, index) => {
    if (index) {
      nodes[index - 1].next = element;
    }
  });

  return nodes[0];
}
