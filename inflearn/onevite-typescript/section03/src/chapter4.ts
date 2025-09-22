/**
 * 대수 타입
 * -> 여러개의 타입을 합성하여 새로운 타입을 만드는 타입
 * -> 합집합 타입, 교집합 타입이 존재
 */

/**
 * 1. 합집합 타입 (Union Type)
 */

let a: string | number | boolean | null | undefined | {};
a = 1;
a = "hello";
a = true;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4: Union1 = {
//   color: "",
//   language: "",
// };