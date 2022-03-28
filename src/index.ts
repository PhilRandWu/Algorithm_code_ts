/*
 * @Description:
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-03-25 21:53:35
 * @LastEditTime: 2022-03-28 14:50:23
 * @LastEditors: PhilRandWu
 */

function Fibonacci(num: number): number {
  if (num <= 0) return -1;
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 1;
  }
  return Fibonacci(num - 1) + Fibonacci(num - 2);
}

console.log(Fibonacci(4));
