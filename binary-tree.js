/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) {
      return 0
    }

    function minHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minHelper(node.right) + 1;
      if (node.right === null) return minHelper(node.left) + 1;
      return (Math.min(minHelper(node.left), minHelper(node.right)) + 1)
    }

    return minHelper(this.root)

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if (!this.root) {
      return 0
    }

    function minHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minHelper(node.right) + 1;
      if (node.right === null) return minHelper(node.left) + 1;
      return (Math.max(minHelper(node.left), minHelper(node.right)) + 1)
    }

    return minHelper(this.root)

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function sumHelper(node) {
      if (node === null)  {
        return 0;
      }
      let left = sumHelper(node.left);
      let right = sumHelper(node.right);
      result = Math.max(result, node.val + left + right);
      return Math.max(0, left + node.val, right + node.val);
    }

    sumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let node = queue.shift();
      let val = node.val;
      let isHigher = val > lowerBound;
      let isClosest = val < closest || closest === null;

      if (isHigher && isClosest) {
        closest = val;
      }
      if (node.left)  {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right) 
      }
    }

    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
