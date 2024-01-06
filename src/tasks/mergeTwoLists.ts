/*
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getValues(node: ListNode | null, values: number[] = []): number[] {
  return node ? getValues(node.next, [node.val, ...values]) : values;
}

export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const values1 = getValues(list1);
  const values2 = getValues(list2);

  const sorted = [...values1, ...values2]
    .sort((a, b) => a - b)
    .map((element) => new ListNode(element));

  sorted.forEach((element, index) => {
    if (index) {
      sorted[index - 1].next = element;
    }
  });

  return sorted?.[0] || null;
}
