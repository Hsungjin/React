/**
 * keyof 연산자
 */
function getPropertyKey(person, key) {
    return person[key];
}
console.log(getPropertyKey({ name: "황성진", age: 28 }, "name"));
export {};
