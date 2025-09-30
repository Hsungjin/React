/**
 * 첫번째 사례
 */
function swap(a, b) {
    return [b, a];
}
let a = swap("hello", 10);
let b = swap(true, "hello");
console.log(a);
console.log(b);
/**
 * 두번째 사례
 */
function returnFirstValue(data) {
    return data[0];
}
let num = returnFirstValue(["hi", 1, 2, 3]);
let str = returnFirstValue([1, "hello", "world"]);
let bool = returnFirstValue([null, true, false]);
console.log(num);
console.log(str);
console.log(bool);
/**
 * 세번째 사례
 */
function getLength(data) {
    return data.length;
}
let num2 = getLength([1, 2, 3]);
let str2 = getLength("hello");
console.log(num2);
console.log(str2);
export {};
