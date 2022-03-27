/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-25 22:12:35
 * @LastEditors: PhilRandWu
 */
type numberArr = number[];

const arr: numberArr = [];

function addValue(arr: numberArr) {
  for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 900 + 100));
  }
}

function sort(arr: numberArr, target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

addValue(arr);
console.log(sort(arr, 500));
