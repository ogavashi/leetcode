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

export function maxDepth(root: TreeNode | null): number {
  let maxCnt = 0;

  const recursion = (node: TreeNode | null, depth: number) => {
    if (!node) {
      maxCnt = Math.max(maxCnt, depth - 1);
      return;
    }

    recursion(node.left, depth + 1);
    recursion(node.right, depth + 1);
  };

  recursion(root, 1);

  return maxCnt;
}
