class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;
  const seen = new Set();

  let current = dummy;

  while (current.next) {
    if (seen.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      seen.add(current.next.val);
      current = current.next;
    }
  }

  return dummy.next;
}
