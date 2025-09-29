/**
 * 선언 합침
 */

// type Person = {
//   name: string;
// }

// type Person = {
//   age: number;
// }

interface Person {
  name: string;
}

interface Person {
  age: number;
}

interface Developer extends Person {
  name: "김아무개";
}

const person: Person = {
  name: "황성진",
  age: 28,
};

console.log(person);

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
}