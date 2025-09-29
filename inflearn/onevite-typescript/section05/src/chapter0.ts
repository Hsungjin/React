/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "황성진",
  age: 28,
  sayHi: function (a?: number, b?: number) {
    console.log("안녕하세요");
    if (a && b) {
      console.log(a + b);
    }
  },
};

// person.name = "김아무개";

console.log(person);

person.sayHi();
person.sayHi(1, 2);
