class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  head.next = deleteDuplicates(head.next);

  return head.val === head.next?.val ? head.next : head;
}
