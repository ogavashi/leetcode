function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  function reverse(curr: ListNode, parent: ListNode | null): ListNode {
    const next = curr.next;

    curr = new ListNode(curr.val, parent);

    if (!next) return curr;
    return reverse(next, curr);
  }

  return reverse(head, null);
}
