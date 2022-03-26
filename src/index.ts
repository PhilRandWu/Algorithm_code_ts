/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-25 22:41:10
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

function BeforeOrder(root: Node) {
    if(root === null) {
        return;
    }
    BeforeOrder(root.left);
    BeforeOrder(root.right);
    console.log(root.value);
}

BeforeOrder(A);
