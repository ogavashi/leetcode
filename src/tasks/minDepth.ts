class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0; // An empty tree has depth 0
  }

  let minCount = Infinity;

  const recursion = (node: TreeNode | null, depth: number) => {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      minCount = Math.min(minCount, depth);
      return;
    }

    recursion(node.left, depth + 1);
    recursion(node.right, depth + 1);
  };

  recursion(root, 1);

  return minCount;
}
