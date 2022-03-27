/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-27 16:51:44
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
const E1 = new Node("E");
const F1 = new Node("F");
const G1 = new Node("G");

A1.left = B1;
A1.right = C1;
B1.left = D1;
B1.right = E1;
C1.left = F1;
C1.right = G1;

/**
 * @description: 得到二叉树的深度
 * @param {Node} root
 * @return {*}
 */
function getDeep(root:Node):number {
  if(root === null) {
    return 0;
  }
  const leftDeep = getDeep(root.left);
  const rightDeep = getDeep(root.right);
  return Math.max(leftDeep,rightDeep) + 1;
}


function isBalance(root: Node): Boolean {
  if(root === null) {
    return true;
  }
  const leftDeep = getDeep(root.left);
  const rightDeep = getDeep(root.right);
  if(Math.abs(leftDeep - rightDeep) > 1) {
    return false;
  } else {
    return isBalance(root.left) && isBalance(root.right);
  }
}

console.log(isBalance(A1));
