/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sumOfLeftLeaves(root: TreeNode | null): number {
  let sum: number = 0;

  function visit(node: TreeNode | null, isLeftChild: boolean) {
    if (node) {
      if (!node.right && !node.left && isLeftChild) {
        sum += node.val;
      }
      visit(node.left, true);
      visit(node.right, false);
    }
  }

  visit(root, false);

  return sum;
}
