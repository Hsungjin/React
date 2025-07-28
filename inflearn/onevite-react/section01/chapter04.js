console.log("chapter04");

// 1. 변수
let age = 28;
age = 29;
console.log(age);

// 2. 상수
const name = "John";
console.log(name);
// name = "Jane";
// console.log(name);

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1 $, _  제외한 기호는 사용하지 않는다.
// let #name
// let name#
let $_name = "Jane";
console.log($_name);

// 3-2 숫자로 시작하는 변수는 사용하지 않는다.
// let 1name = "David";
let _2name = "David";
let $2name = "David";

// 3-3 예약어는 사용하지 않는다.
// let let = "Jack";
// let const = "Jack";
// let function = "Jack";

// 4. 변수 명명 가이드
let a = 1;
let b = 2;
let c = a - b;

let salesCount = 10;
let refundCount = 2;
let totalSalesCount = salesCount - refundCount;