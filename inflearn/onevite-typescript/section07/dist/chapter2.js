/**
 * map 메서드
 */
const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);
function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
map(arr, (item) => item * 2);
map(["hi", "hello"], (item) => item.toUpperCase());
map(["hi", "hello"], (item) => parseInt(item));
map([1, 2, 3], (item) => item.toString());
/**
 * forEach 메서드
 */
const arr2 = [1, 2, 3];
arr2.forEach((item) => console.log(item));
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach(arr2, (item) => console.log(item));
forEach(["hi", "hello"], (item) => console.log(item));
forEach([1, 2, 3], (item) => console.log(item));
export {};
