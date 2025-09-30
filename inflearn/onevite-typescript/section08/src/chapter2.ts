/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: "황성진",
  age: 28,
};

console.log(getPropertyKey(person, "name"));
