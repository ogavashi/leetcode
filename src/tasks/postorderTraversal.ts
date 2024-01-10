function postorderTraversal(root: TreeNode | null): number[] {
  const visited: number[] = [];

  function visit(node: TreeNode | null) {
    if (node) {
      visit(node.left);
      visit(node.right);
      visited.push(node.val);
    }
  }

  visit(root);

  return visited;
}
