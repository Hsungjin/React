// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB() { // 익명 함수
  console.log("funcB");
}
varB();

// 2. 화살표 함수
let funcC = (a, b) => a + b;
console.log(funcC(1, 2));

let funcD = (a, b) => {
  return a + b;
}
console.log(funcD(3, 4));

// 3. 함수 표현식과 화살표 함수의 차이
// 함수 표현식은 함수 선언문이 함수 선언 전에 호출 가능
// 화살표 함수는 함수 선언문이 함수 선언 전에 호출 불가능