class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  const seen = new Set();

  let current = head;

  while (current) {
    if (seen.has(current)) {
      return true;
    }
    seen.add(current);
    current = current.next;
  }

  return false;
}
