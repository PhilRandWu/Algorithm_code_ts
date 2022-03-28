/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-28 14:24:53
 * @LastEditors: PhilRandWu
 */
class Node {
  public childs: Node[] = [];
  constructor(public value: string | number) {}
}

const A1 = new Node("A");
const B1 = new Node("B");
const C1 = new Node("C");
const D1 = new Node("D");
const F1 = new Node("F");
const G1 = new Node("G");

A1.childs.push(B1);
A1.childs.push(D1);
A1.childs.push(G1);
B1.childs.push(C1);
D1.childs.push(F1);

function deepSearch(root: Node, target:string): boolean {
  if(root === null || !target) {
    return false;
  }
  if(root.value === target) {
    return true;
  }
  let result = false;
  for(let i = 0; i < root.childs.length; i ++) {
    result ||= deepSearch(root.childs[i],target);
  }
  return result ? true : false;
}

console.log(deepSearch(A1,'F'));
