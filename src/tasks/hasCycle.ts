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

function hasCycle2(head: ListNode | null): boolean {
  let slow = head;
  let fast = head?.next;

  while (fast && fast.next && slow) {
    if (fast === slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
}
