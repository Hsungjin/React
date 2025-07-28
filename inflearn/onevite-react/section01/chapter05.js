// 1. Number Type
let num1 = 28;
let num2 = 1.5;
let num3 = 10e3;
let num4 = 10e-3;
let num5 = 0b1010;
let num6 = 0o123;
let num7 = 0x1A;

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN;

console.log(num1, num2, num3, num4, num5, num6, num7);
console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2, num1 % num2, num1 ** num2);
console.log(num1 == num2);
console.log(inf, mInf, nan);
console.log(1 * "hello");

// 2. String Type
let str1 = "Hello";
let str2 = "World";
let str3 = `Hello ${str1} ${str2}`;
let str4 = `
  Hello ${str1}
  World ${str2}
  ${str3}
`;
// 템플릿 리터럴 문법

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);

// 3. Boolean Type
let isTrue = true;
let isFalse = false;
let isUndefined = undefined;

console.log(isTrue, isFalse, isUndefined);
console.log(isTrue && isFalse, isTrue || isFalse);
console.log(!isTrue, !isFalse, !isUndefined);
console.log(isTrue && isUndefined, isTrue || isUndefined);

// 4. Null Type
let nullValue = null;
let nullValue2 = null;

console.log(nullValue, nullValue2);

// 5. Undefined Type
let undefinedValue = undefined;
let undefinedValue2;

console.log(undefinedValue, undefinedValue2);

// Undefined 와 Null 의 차이
// Undefined 는 변수가 선언되었지만 값이 할당되지 않은 상태
// Null 은 변수가 선언되었고 값이 할당된 상태
