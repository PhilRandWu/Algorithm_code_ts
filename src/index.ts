/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-25 22:22:26
 * @LastEditors: PhilRandWu
 */
type numberArr = number[];

const arr: numberArr = [];

function addNum(arr: numberArr) {
  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 900 + 100));
  }
}

class Node {
  public left: Node = null;
  public right: Node = null;
  constructor(public value: string | number) {}
}

function addValue(root: Node, num: number) {
    if(root === null || num === null) {
        return;
    }
    if(root.value === num) {
        return;
    } else if(root.value > num) {
        if(root.left === null) {
            root.left = new Node(num);
        } else {
            addValue(root.left, num);
        }
    } else {
        if(root.right === null) {
            root.right = new Node(num);
        } else {
            addValue(root.right, num);
        }
    }
}

function buildSearchTree(arr: numberArr):Node {
    if(arr === null || arr.length === 0) {
        return;
    }
    const root:Node = new Node(arr[0]);
    for(let i = 1; i < arr.length; i ++) {
        addValue(root, arr[i]);
    }
    return root;
}

addNum(arr);
const root = buildSearchTree(arr);
console.log(root);
