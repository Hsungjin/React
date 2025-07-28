// 1. 배열 생성
let arrA = new Array();
let arrB = [];

console.log(arrA);
console.log(arrB);

// 2. 배열 속성 추가
arrA.push(1);
arrA.push(2);
arrA.push(3);

console.log(arrA);
console.log(arrA.length);
console.log(arrA[0]);
console.log(arrA.pop());
console.log(arrA);

arrA.unshift(4);
arrA.unshift(5);
arrA.unshift(6);

console.log(arrA);
console.log(arrA.shift());
console.log(arrA);

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
console.log(arrC);