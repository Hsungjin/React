// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name : "황성진", age : 28},
    {name : "홍길동", age : 20},
    {name : "이순신", age : 30},
];

let filteredArr = arr1.filter((item) => item.age >= 25);
console.log(filteredArr);

let filteredArr2 = arr1.filter((item) => item.name === "홍길동");
console.log(filteredArr2);


// 2. map
// 기존 배열의 각 요소를 변형하여 새로운 배열로 반환
let mappedArr = arr1.map((item, index, array) => item.name);
console.log(mappedArr);

let mappedArr2 = arr1.map((item, index, array) => item.age * 2);
console.log(mappedArr2);

// 3. sort
// 배열의 요소를 정렬
let arr2 = [ 10, 3, 5 ];
arr2.sort((a, b) => a - b);
console.log(arr2);

let arr3 = [ 10, 3, 5 ];
arr3.sort((a, b) => b - a);
console.log(arr3);


// 4. toSorted
// 배열의 요소를 정렬하여 새로운 배열로 반환
let arr4 = [ 10, 3, 5 ];
let sortedArr = arr4.toSorted((a, b) => a - b);
console.log(sortedArr);

let sortedArr2 = arr4.toSorted((a, b) => b - a);
console.log(sortedArr2);


// 5. join
// 배열의 요소를 하나의 문자열로 결합
let arr5 = [ 1, 2, 3 ];
let joinedArr = arr5.join(",");
console.log(joinedArr);

let joinedArr2 = arr5.join("-");
console.log(joinedArr2);

// 6. toJoined