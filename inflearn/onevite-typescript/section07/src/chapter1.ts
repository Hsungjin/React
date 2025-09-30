/**
 * 첫번째 사례
 */

function swap<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

let a = swap<string, number>("hello", 10);
let b = swap<boolean, string>(true, "hello");

console.log(a);
console.log(b);

/**
 * 두번째 사례
 */
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue(["hi", 1, 2, 3]);
let str = returnFirstValue([1, "hello", "world"]);
let bool = returnFirstValue([null, true, false]);

console.log(num);
console.log(str);
console.log(bool);

/**
 * 세번째 사례
 */
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let num2 = getLength([1, 2, 3]);
let str2 = getLength("hello");

console.log(num2);
console.log(str2);
