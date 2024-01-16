function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head?.next;

  while (slow) {
    if (!fast) {
      return slow;
    }
    fast = fast?.next?.next;
    slow = slow.next;
  }

  return head;
}
