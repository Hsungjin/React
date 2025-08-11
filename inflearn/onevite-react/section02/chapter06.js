// 1. 배열 순회
let arr = [ 1, 2, 3 ];

// 1.1 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let arr2 = [ 4, 5, 6, 7, 8 ];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}

// 1.2 배열 요소
for (let item of arr) {
    console.log(item);
}

// 2. 객체 순회
let person = {
    name: "황성진",
    age: 28,
    hobby: "헬스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값만 추출하여 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for(let i = 0; i < keys.length; i++) {
    const value = person[keys[i]];
    console.log(keys[i], value);
}

for (let key of keys) {
    const value = person[key];
    console.log(key, value);
}

// 2.2 Object.values 사용
// -> 객체에서 value 값만 추출하여 배열로 반환
let values = Object.values(person);
console.log(values);

for (let value of values) {
    console.log(value);
}

// 2.3 for in 사용
// -> 객체의 프로퍼티 이름을 반환
for (let key in person) {
    console.log(key, person[key]);
}

// 2.4 for of 사용
// -> 객체의 프로퍼티 이름을 반환
for (let key of Object.keys(person)) {
    console.log(key, person[key]);
}