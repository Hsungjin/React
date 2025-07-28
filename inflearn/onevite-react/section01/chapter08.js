// 1. null 병합 연산자
// -> 왼쪽 피연산자가 null 또는 undefined 인 경우 오른쪽 피연산자를 반환

let num1 = 10;
let num2 = 20;
let num3;
let num4 = null;
let num5 = undefined;

console.log(num1 || num2);
console.log(num1 && num2);
console.log(num1 ?? num2);
console.log(num3 ?? num4);
console.log(num3 ?? num4 ?? num5);

let userName = "황성진";
let userNickName = "Ronnie";

let displayName = userName || userNickName;
let displayName2 = userName ?? userNickName;

console.log(displayName);
console.log(displayName2);

// 2. typeof 연산자
// -> 피연산자의 데이터 타입을 반환

let num6 = 10;
let str6 = "Hello";
let bool6 = true;
let null6 = null;
let undefined6 = undefined;
let obj6 = {};

console.log(typeof num6, typeof str6, typeof bool6, typeof null6, typeof undefined6, typeof obj6);

// 3. delete 연산자
// -> 객체의 속성을 삭제

let obj7 = {
  name: "황성진",
  age: 28,
};

delete obj7.age;
console.log(obj7);