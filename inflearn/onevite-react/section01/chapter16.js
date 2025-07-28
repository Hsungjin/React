// 1. 상수 객체
const animal = {
  type: "dog",
  name: "뽀삐",
  age: 2,
  color: "white",
  eat: function() {
    console.log("먹는다");
  }
}

console.log(animal);
animal.eat();

animal.type = "cat";
animal.name = "냥냥";
animal.age = 3;
animal.color = "black";
animal.eat = function() {
  console.log("먹는다2");
}

delete animal.color;
console.log(animal);
animal.eat();

// 2. 메서드
// -> 객체의 속성 값으로 함수를 사용하는 것
const person = {
  name: "황성진",
  age: 28,
  sayHello: function() {
    console.log("Hello");
  }
}

person.sayHello();
person["sayHello"]();