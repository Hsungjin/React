// 스코프
// -> 전역(전체영역) 스코프 / 지역(특정영역) 스코프
// 전역 스코프 : 전역 변수
// 지역 스코프 : 지역 변수

// 1. 전역 스코프
let num = 10;

// 2. 지역 스코프
function func() {
  let num2 = 20;
  console.log(num2);
}

console.log(num);
func();
console.log(num2);