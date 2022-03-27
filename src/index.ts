/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-27 16:33:14
 * @LastEditors: PhilRandWu
 */
class Node {
  public left: Node = null;
  public right: Node = null;
  constructor(public value: string | number) {}
}

const A1 = new Node('A');
const B1 = new Node('B');
const C1 = new Node('C');
const D1 = new Node('D');
const E1 = new Node('E');
const F1 = new Node('F');
const G1 = new Node('G');

A1.left = B1;
A1.right = C1;
B1.left = D1;
B1.right = E1;
C1.left = F1;
C1.right = G1;

function wideSearch(rootArr:Node[], target:string): boolean {
    if(rootArr === null || rootArr.length === 0 || target === null) {
      return false;
    }
    const childList: Node[] = [];
    for(let i = 0; i < rootArr.length; i ++) {
      if(rootArr[i] && rootArr[i].value === target) {
        return true;
      } else {
        rootArr[i].left && childList.push(rootArr[i].left);
        rootArr[i].right && childList.push(rootArr[i].right);
      }
    }
    return wideSearch(childList,target);
}

console.log(wideSearch([A1],'C'));
