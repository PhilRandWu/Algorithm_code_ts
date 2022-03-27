/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-27 17:20:44
 * @LastEditors: PhilRandWu
 */
class Node {
  public left: Node = null;
  public right: Node = null;
  constructor(public value: string | number) {}
}

const A1 = new Node("A");
const B1 = new Node("B");
const C1 = new Node("C");
const D1 = new Node("D");

A1.left = B1;
B1.left = C1;
B1.right = D1;

/**
 * @description: 得到二叉树的深度
 * @param {Node} root
 * @return {*}
 */
function getDeep(root: Node): number {
  if (root === null) {
    return 0;
  }
  const leftDeep = getDeep(root.left);
  const rightDeep = getDeep(root.right);
  return Math.max(leftDeep, rightDeep) + 1;
}

function isBalance(root: Node): Boolean {
  if (root === null) {
    return true;
  }
  const leftDeep = getDeep(root.left);
  const rightDeep = getDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) > 1) {
    return false;
  } else {
    return isBalance(root.left) && isBalance(root.right);
  }
}

function leftRotate(root: Node): Node {
  const newRoot = root.right;
  const changeBranch = root.right.left;
  root.right = changeBranch;
  newRoot.left = root;
  return newRoot;
}

function rightRotate(root: Node): Node {
  const newRoot = root.left;
  const changeBranch = root.left.right;
  root.left = changeBranch;
  newRoot.right = root;
  return newRoot;
}

function change(root: Node): Node {
  if (isBalance(root)) {
    return root;
  }
  if (root.left !== null) {
    root.left = change(root.left);
  }
  if (root.right !== null) {
    root.right = change(root.right);
  }
  const leftDeep = getDeep(root.left);
  const rightDeep = getDeep(root.right);
  if (Math.abs(leftDeep - rightDeep) < 2) {
    return root;
  } else if (leftDeep > rightDeep) {
    return rightRotate(root);
  } else {
    return leftRotate(root);
  }
}

console.log(isBalance(A1));
const newRoot = change(A1);
console.log(isBalance(newRoot));
console.log(newRoot);

