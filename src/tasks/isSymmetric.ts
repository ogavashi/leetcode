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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p && q) {
    if (!isSameTree(p.left, q.right)) {
      return false;
    }

    if (p.val !== q.val) {
      return false;
    }

    if (!isSameTree(p.right, q.left)) {
      return false;
    }
  } else {
    return p === null && q === null;
  }

  return true;
}

export function isSymmetric(root: TreeNode | null): boolean {
  if (root?.right && root?.left) {
    return isSameTree(root.left, root.right);
  } else {
    return root?.left === null && root.right === null;
  }
}
