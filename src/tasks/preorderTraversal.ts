function preorderTraversal(root: TreeNode | null): number[] {
  const visited: number[] = [];

  function visit(node: TreeNode | null) {
    if (node) {
      visited.push(node.val);
      visit(node.left);
      visit(node.right);
    }
  }

  visit(root);

  return visited;
}
