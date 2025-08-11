// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 배열의 각 요소에 대해 콜백 함수를 실행하는 메서드
let arr1 = [ 1, 2, 3 ];
arr1.forEach(function(item, index, array) {
    console.log(item, index, array);
});

let doubleArr = [];

arr1.forEach((item) => {
    doubleArr.push(item * 2);
});
console.log(doubleArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [ 1, 2, 3 ];
console.log(arr2.includes(2));
console.log(arr2.includes(4));

// 3. indexOf
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr3 = [ 1, 2, 3 ];
console.log(arr3.indexOf(2));
console.log(arr3.indexOf(4));

let objectArr = [
    {name : "황성진"},
    {name : "홍길동"},
];

console.log(
    console.log(objectArr.indexOf({name : "홍길동"}))
)

console.log(
    objectArr.findIndex((item) => item.name === "홍길동")
)

// 4. findIndex
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr4 = [ 1, 2, 3 ];
console.log(arr4.findIndex((item) => item === 3));
console.log(arr4.findIndex((item) => item === 10));

// 5. find
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr5 = [ {name : "황성진"}, {name : "홍길동"}, {name : "이순신"} ];
console.log(arr5.find((item) => item.name === "홍길동"));
console.log(arr5.find((item) => item.name === "이순신"));