// 함수 선언

function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

// 함수 표현식

const add2 = function (a, b) {
  return a - b;
}

console.log(add2(3, 4));

// 화살표 함수

const add3 = (a, b) => a * b;

console.log(add3(5, 6));


// 호이스팅
// -> 함수 선언문이 함수 선언 전에 호출 가능
console.log(outer());
// console.log(inner(1, 2));

// 중첩 함수
function outer() {
  function inner(a, b) {
    return a + b;
  }
  return inner(1, 2);
}
