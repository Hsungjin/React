// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [ 1, 2, 3 ];
const newLength = arr1.push(4, 5, 6);
console.log(arr1);
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하는 메서드
let arr2 = [ 1, 2, 3 ];
const popedItem = arr2.pop();
console.log(arr2);
console.log(popedItem);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하는 메서드
let arr3 = [ 1, 2, 3 ];
const shiftedItem = arr3.shift();
console.log(arr3);
console.log(shiftedItem);

// 4. unshift
let arr4 = [ 1, 2, 3 ];
const unshiftedLength = arr4.unshift(4, 5, 6);
console.log(arr4);
console.log(unshiftedLength);

// 5. slice
// 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [ 1, 2, 3, 4, 5 ];
let sliced = arr5.slice(2, 4);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-2);
console.log(arr5);
console.log(sliced);
console.log(sliced2);
console.log(sliced3);

// 6. concat
// 배열을 합쳐서 새로운 배열로 반환
let arr6 = [ 1, 2, 3 ];
let arr7 = [ 4, 5, 6 ];
let concat = arr6.concat(arr7);
console.log(concat);



