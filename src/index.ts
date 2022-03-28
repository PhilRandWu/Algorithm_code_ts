/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-28 14:37:46
 * @LastEditors: PhilRandWu
 */
class Node {
  public Neighbor: Node[] = [];
  constructor(public value: string | number) {}
}

const A1 = new Node('A');
const B1 = new Node('B');
const C1 = new Node('C');
const D1 = new Node('D');
const E1 = new Node('E');
const F1 = new Node('F');
const G1 = new Node('G');

A1.Neighbor.push(B1);
A1.Neighbor.push(C1);
A1.Neighbor.push(E1);
B1.Neighbor.push(A1);
B1.Neighbor.push(E1);
C1.Neighbor.push(A1);
C1.Neighbor.push(D1);
C1.Neighbor.push(E1);
D1.Neighbor.push(C1);
E1.Neighbor.push(A1);
E1.Neighbor.push(B1);
E1.Neighbor.push(C1);

function deepSearch(root:Node,target: string,path: Node[]): boolean {
  if(root === null || !target) {
    return false;
  }
  if(path.indexOf(root) > -1) {
    return false;
  }
  if(root.value === target) {
    return true;
  }
  let result = false;
  path.push(root);
  for(let i = 0; i < root.Neighbor.length; i ++) {
    result ||= deepSearch(root.Neighbor[i],target,path);
  }
  return result ? true : false;
}

const path = [];
deepSearch(A1, 'D',path);
console.log(path);
