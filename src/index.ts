/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-28 14:59:24
 * @LastEditors: PhilRandWu
 */

function jump(num:number): number {
  if(num <= 0) {
    return -1;
  }
  if(num === 1) {
    return 1;
  }
  if(num === 2) {
    return 2; //1 1   2
  }
  let sum = 0;
  for(let i = 1; i < num; i ++) {
    sum += jump(num - i);
  }
  return sum + 1;
}

// 1 1 1
// 1 2
// 2 1
// 3
console.log(jump(3));
// 1 1 1 1
// 1 2 1
// 2 2
// 2 1 1
// 1 1 2
// 1 3
// 3 1
console.log(jump(4));
