// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result);
console.log(typeof result);

// 2. 명시적 형 변환
// -> 개발자가 직접 형 변환 하는 것

let num2 = 10;
let str2 = "20";
const result2 = String(num2) + str2;
console.log(result2);
console.log(typeof result2);

let str3 = "10개";
// let num3 = Number(str3);
let num3 = parseInt(str3);
console.log(num3);
console.log(typeof num3);

// -> 숫자 -> 문자열
let num1 = 10;
let numToStr = num1.toString();
console.log(numToStr + "입니다");
console.log(typeof numToStr);