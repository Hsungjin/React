// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자 함수
let obj2 = {}; // 객체 리터럴

console.log(obj1);
console.log(obj2);

// 2. 객체 속성 추가
obj1.name = "황성진";
obj1.age = 28;

console.log(obj1);

// 3. 객체 속성 삭제
delete obj1.age;

console.log(obj1);

// 4. 객체 속성 수정
obj1.name = "황성진2";
console.log(obj1);

obj1 = {
  name: "황성진",
  age: 28,
  sayHello: function() {
    console.log("Hello");
  }
}

console.log(obj1);
obj1.sayHello();

let name = obj1.name;
let age = obj1["age"];

obj1.job = "developer";
obj1["favorite"] = "coding";

console.log(obj1);

let result = "name" in obj1;
console.log(result);

result = "job" in obj1;
console.log(result);

result = "favorite" in obj1;
console.log(result);

result = "address" in obj1;
console.log(result);