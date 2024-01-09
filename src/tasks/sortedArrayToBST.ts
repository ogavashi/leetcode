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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }

  const center = Math.floor(nums.length / 2);

  return new TreeNode(
    nums[center],
    sortedArrayToBST(nums.slice(0, center)),
    sortedArrayToBST(nums.slice(center + 1))
  );
}
