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

export function inorderTraversal(root: TreeNode | null): number[] {
  const visited: number[] = [];

  function visit(node: TreeNode | null) {
    if (node) {
      visit(node.left);
      visited.push(node.val);
      visit(node.right);
    }
  }

  visit(root);

  return visited;
}
