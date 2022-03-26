/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-26 02:22:25
 * @LastEditors: PhilRandWu
 */
class Node {
  public childs: Node[] = [];
  constructor(public value: string | number) {}
}

const A1 = new Node('A');
const B1 = new Node('B');
const C1 = new Node('C');
const D1 = new Node('D');
const E1 = new Node('E');
const F1 = new Node('F');
const G1 = new Node('G');

A1.childs.push(B1);
A1.childs.push(C1);
B1.childs.push(D1);
B1.childs.push(E1);
C1.childs.push(F1);
C1.childs.push(G1);

function wideSearch(rootArr:Node[], target:string): boolean {
  if(rootArr === null || rootArr.length === 0 || target === null) {
    return false;
  }
  let childs = [];
  for(let i = 0; i < rootArr.length; i ++) {
    if(rootArr[i].value === target) {
      return true;
    } else {
      childs = childs.concat(rootArr[i].childs);
    }
  }
  return wideSearch(childs,target);
}

console.log(wideSearch([A1],'G'));
