function inorderTraversal(root: TreeNode | null): Map<number, number> {
  const visited = new Map<number, number>();

  function visit(node: TreeNode | null) {
    if (node) {
      visit(node.left);
      visited.set(node.val, (visited.get(node.val) || 0) + 1);
      visit(node.right);
    }
  }

  visit(root);

  return visited;
}

function findMode(root: TreeNode | null): number[] {
  const traversed = inorderTraversal(root);

  let max = -Infinity;

  for (const [_, value] of traversed) {
    if (value > max) {
      max = value;
    }
  }

  let res: number[] = [];

  for (const [key, value] of traversed) {
    if (value === max) {
      res.push(key);
    }
  }

  return res;
}
