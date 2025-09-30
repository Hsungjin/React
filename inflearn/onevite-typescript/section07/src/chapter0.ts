/**
 * 제네릭
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let str = func("hello");
let num = func(10);
let bool = func(true);
let arr = func<[number, number, number]>([1, 2, 3]);
let obj = func({ name: "황성진", age: 28 });

console.log(str);
console.log(num);
console.log(bool);
console.log(arr);
console.log(obj);
