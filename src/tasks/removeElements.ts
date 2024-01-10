function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return null;
  }

  head.next = removeElements(head.next, val);

  return head.val === val ? head.next : head;
}
