/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-26 01:22:45
 * @LastEditors: PhilRandWu
 */
class Node {
  public left: Node = null;
  public right: Node = null;
  constructor(public value: string | number) {}
}

const A = new Node("A");
const B = new Node("B");
const C = new Node("C");
const D = new Node("D");
const E = new Node("E");

A.left = B;
A.right = C;
B.left = D;
B.right = E;

const A1 = new Node("A");
const B1 = new Node("B");
const C1 = new Node("C");
const D1 = new Node("D");
const E1 = new Node("E");

A1.left = B1;
A1.right = C1;
B1.left = D1;
B1.right = E1;

function compare(root1: Node, root2: Node): Boolean {
  if(root1 === root2) {
    return true;
  }
  if(root1 !== null && root2 === null || root1 === null && root2 !== null) {
    return false;
  }
  if(root1.value === root2.value) {
    return true;
  }
  return compare(root1.left, root2.left) && compare(root1.right,root2.right) || compare(root1.left, root2.right) && compare(root1.right,root2.left);
}

console.log(compare(A,A1));
